// GET /api/status?realm_id=... — Check connection status for a QBO company
// GET /api/status — List all connected realm IDs

const { getTokens, listConnections } = require('../lib/tokens');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { realm_id } = req.query || {};

    if (realm_id) {
      // Check specific company
      const tokens = await getTokens(realm_id);
      if (!tokens) {
        return res.status(404).json({ connected: false, realm_id });
      }

      return res.status(200).json({
        connected: true,
        realm_id,
        access_token_expired: tokens.is_expired,
        refresh_token_expired: tokens.refresh_is_expired,
        updated_at: tokens.updated_at,
      });
    }

    // List all connections
    const realms = await listConnections();
    return res.status(200).json({
      connections: realms.length,
      realm_ids: realms,
    });
  } catch (err) {
    console.error('Status error:', err.message);
    res.status(500).json({ error: 'Status check failed', detail: err.message });
  }
};
