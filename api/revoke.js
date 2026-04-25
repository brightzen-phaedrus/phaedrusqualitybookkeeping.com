// POST /api/revoke — Revoke a refresh token (disconnect)
// Body: { "realm_id": "..." } (reads from KV and deletes)
// Or legacy: { "refresh_token": "..." }

const https = require('https');
const { getTokens, deleteTokens } = require('../lib/tokens');

const CLIENT_ID = process.env.QBO_CLIENT_ID;
const CLIENT_SECRET = process.env.QBO_CLIENT_SECRET;
const REVOKE_URL = 'https://developer.api.intuit.com/v2/oauth2/tokens/revoke';

function revokeToken(token) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ token });
    const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    const url = new URL(REVOKE_URL);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (resp) => {
      let data = '';
      resp.on('data', (chunk) => (data += chunk));
      resp.on('end', () => {
        if (resp.statusCode === 200 || resp.statusCode === 204) {
          resolve({ success: true });
        } else {
          reject(new Error(`Revoke failed (${resp.statusCode}): ${data}`));
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

    // If realm_id provided, look up the stored token
    if (realmId && !refresh_token) {
      const stored = await getTokens(realmId);
      if (!stored) {
        return res.status(404).json({ error: 'No tokens found for this realm' });
      }
      refresh_token = stored.refresh_token;
    }

    if (!refresh_token) {
      return res.status(400).json({ error: 'Missing refresh_token or realm_id' });
    }

    // Revoke with Intuit
    await revokeToken(refresh_token);

    // Delete from KV
    if (realmId) {
      await deleteTokens(realmId);
    }

    console.log('Token revoked and deleted:', { realmId });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Revoke error:', err.message);
    res.status(500).json({ error: 'Token revocation failed', detail: err.message });
  }
};
