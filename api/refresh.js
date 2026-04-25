// POST /api/refresh — Refresh an expired access token
// Body: { "realm_id": "..." } (reads refresh token from KV)
// Or legacy: { "refresh_token": "..." } (direct token)

const https = require('https');
const { getTokens, storeTokens } = require('../lib/tokens');

const CLIENT_ID = process.env.QBO_CLIENT_ID;
const CLIENT_SECRET = process.env.QBO_CLIENT_SECRET;
const TOKEN_URL = 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer';

function refreshToken(token) {
  return new Promise((resolve, reject) => {
    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: token,
    }).toString();

    const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    const url = new URL(TOKEN_URL);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (resp) => {
      let data = '';
      resp.on('data', (chunk) => (data += chunk));
      resp.on('end', () => {
        if (resp.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Refresh failed (${resp.statusCode}): ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = '';
    for await (const chunk of req) {
      body += chunk;
    }
    const parsed = JSON.parse(body);

    let refresh_token = parsed.refresh_token;
    let realmId = parsed.realm_id;

    // If realm_id provided, look up the stored refresh token
    if (realmId && !refresh_token) {
      const stored = await getTokens(realmId);
      if (!stored) {
        return res.status(404).json({ error: 'No tokens found for this realm' });
      }
      if (stored.refresh_is_expired) {
        return res.status(401).json({ error: 'Refresh token expired — reconnect required' });
      }
      refresh_token = stored.refresh_token;
    }

    if (!refresh_token) {
      return res.status(400).json({ error: 'Missing refresh_token or realm_id' });
    }

    const tokens = await refreshToken(refresh_token);

    // If we know the realmId, persist the new tokens
    if (realmId) {
      await storeTokens(realmId, tokens);
    }

    console.log('Token refresh success:', {
      realmId,
      access_token_length: tokens.access_token?.length,
      expires_in: tokens.expires_in,
    });

    res.status(200).json({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expires_in: tokens.expires_in,
      x_refresh_token_expires_in: tokens.x_refresh_token_expires_in,
    });
  } catch (err) {
    console.error('Refresh error:', err.message);
    res.status(500).json({ error: 'Token refresh failed', detail: err.message });
  }
};
