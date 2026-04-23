// GET /api/callback — OAuth 2.0 callback from Intuit
// Exchanges authorization code for access + refresh tokens

const https = require('https');

const CLIENT_ID = process.env.QBO_CLIENT_ID;
const CLIENT_SECRET = process.env.QBO_CLIENT_SECRET;
const REDIRECT_URI = process.env.QBO_REDIRECT_URI || 'https://phaedrusqualitybookkeeping.com/api/callback';
const TOKEN_URL = 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer';

function exchangeCode(code) {
  return new Promise((resolve, reject) => {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI,
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
          reject(new Error(`Token exchange failed (${resp.statusCode}): ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(';').forEach((c) => {
    const [key, ...val] = c.trim().split('=');
    cookies[key] = val.join('=');
  });
  return cookies;
}

module.exports = async (req, res) => {
  try {
    const { code, state, realmId, error } = req.query || {};

    // Handle Intuit errors
    if (error) {
      console.error('Intuit OAuth error:', error);
      return res.writeHead(302, { Location: '/disconnected/' }).end();
    }

    if (!code || !realmId) {
      return res.status(400).json({ error: 'Missing code or realmId' });
    }

    // CSRF validation
    const cookies = parseCookies(req.headers.cookie);
    if (!cookies.qbo_state || cookies.qbo_state !== state) {
      console.error('CSRF state mismatch');
      return res.status(403).json({ error: 'State mismatch — possible CSRF attack' });
    }

    // Exchange code for tokens
    const tokens = await exchangeCode(code);

    // Log for now — in production, store securely
    console.log('OAuth success:', {
      realmId,
      access_token_length: tokens.access_token?.length,
      refresh_token_length: tokens.refresh_token?.length,
      expires_in: tokens.expires_in,
      x_refresh_token_expires_in: tokens.x_refresh_token_expires_in,
    });

    // TODO: Store tokens securely (encrypted file, KV store, etc.)
    // For now, we log them server-side and redirect to success page

    // Clear the state cookie
    res.setHeader('Set-Cookie', 'qbo_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0');
    res.writeHead(302, { Location: `/connected/?realmId=${realmId}` });
    res.end();
  } catch (err) {
    console.error('Callback error:', err.message);
    res.status(500).json({ error: 'Token exchange failed', detail: err.message });
  }
};
