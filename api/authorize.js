// GET /api/authorize — Starts the OAuth 2.0 flow with Intuit
// Redirects the user to Intuit's authorization page

const crypto = require('crypto');

const CLIENT_ID = process.env.QBO_CLIENT_ID;
const REDIRECT_URI = process.env.QBO_REDIRECT_URI || 'https://phaedrusqualitybookkeeping.com/api/callback';
const SCOPES = 'com.intuit.quickbooks.accounting com.intuit.quickbooks.payment';

// Intuit OAuth 2.0 endpoints (from discovery document)
const AUTHORIZE_URL = 'https://appcenter.intuit.com/connect/oauth2';

module.exports = (req, res) => {
  if (!CLIENT_ID) {
    return res.status(500).json({ error: 'QBO_CLIENT_ID not configured' });
  }

  // Generate CSRF state token
  const state = crypto.randomBytes(16).toString('hex');

  // Build authorization URL
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPES,
    state: state,
  });

  const authUrl = `${AUTHORIZE_URL}?${params.toString()}`;

  // Set state in a secure cookie for CSRF validation on callback
  res.setHeader('Set-Cookie', `qbo_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
  res.writeHead(302, { Location: authUrl });
  res.end();
};
