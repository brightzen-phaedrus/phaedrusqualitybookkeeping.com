// GET /api/query — Execute a QBO API query
// Query params: realm_id (required), query (required)
// Example: /api/query?realm_id=123&query=SELECT * FROM Account MAXRESULTS 5
//
// Auto-refreshes expired access tokens before querying.

const https = require('https');
const { getTokens } = require('../lib/tokens');

const CLIENT_ID = process.env.QBO_CLIENT_ID;
const CLIENT_SECRET = process.env.QBO_CLIENT_SECRET;
const TOKEN_URL = 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer';

// Sandbox vs production base URL
const QBO_BASE_SANDBOX = 'https://sandbox-quickbooks.api.intuit.com';
const QBO_BASE_PROD = 'https://quickbooks.api.intuit.com';

function refreshAccessToken(refreshToken) {
  return new Promise((resolve, reject) => {
    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }).toString();

    const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    const url = new URL(TOKEN_URL);

    const req = https.request({
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (resp) => {
      let data = '';
      resp.on('data', (chunk) => (data += chunk));
      resp.on('end', () => {
        if (resp.statusCode === 200) resolve(JSON.parse(data));
        else reject(new Error(`Refresh failed (${resp.statusCode}): ${data}`));
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function qboQuery(realmId, accessToken, query, useSandbox) {
  return new Promise((resolve, reject) => {
    const base = useSandbox ? QBO_BASE_SANDBOX : QBO_BASE_PROD;
    const encodedQuery = encodeURIComponent(query);
    const url = new URL(`${base}/v3/company/${realmId}/query?query=${encodedQuery}`);

    const req = https.request({
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    }, (resp) => {
      let data = '';
      resp.on('data', (chunk) => (data += chunk));
      resp.on('end', () => {
        if (resp.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`QBO query failed (${resp.statusCode}): ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { realm_id, query, sandbox } = req.query || {};

  if (!realm_id || !query) {
    return res.status(400).json({ error: 'Missing realm_id or query parameter' });
  }

  try {
    let tokens = await getTokens(realm_id);
    if (!tokens) {
      return res.status(404).json({ error: 'No tokens found for this realm — connect first' });
    }

    // Auto-refresh if access token is expired
    let accessToken = tokens.access_token;
    if (tokens.is_expired) {
      if (tokens.refresh_is_expired) {
        return res.status(401).json({ error: 'Refresh token expired — reconnect required' });
      }

      console.log('Access token expired, refreshing...');
      const refreshed = await refreshAccessToken(tokens.refresh_token);

      // Store refreshed tokens
      const { storeTokens } = require('../lib/tokens');
      await storeTokens(realm_id, refreshed);

      accessToken = refreshed.access_token;
    }

    // Determine sandbox vs production
    // The sandbox realm has the longer ID
    const useSandbox = sandbox !== 'false' && realm_id === '4620816365217760570';

    const result = await qboQuery(realm_id, accessToken, query, useSandbox);

    res.status(200).json(result);
  } catch (err) {
    console.error('Query error:', err.message);
    res.status(500).json({ error: 'Query failed', detail: err.message });
  }
};
