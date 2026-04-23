// POST /api/revoke — Revoke a refresh token (disconnect)
// Body: { "refresh_token": "..." }

const https = require('https');

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
    const { refresh_token } = JSON.parse(body);

    if (!refresh_token) {
      return res.status(400).json({ error: 'Missing refresh_token' });
    }

    await revokeToken(refresh_token);

    console.log('Token revoked successfully');
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Revoke error:', err.message);
    res.status(500).json({ error: 'Token revocation failed', detail: err.message });
  }
};
