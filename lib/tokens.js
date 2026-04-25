// lib/tokens.js — Token storage via Vercel Blob
//
// Stores tokens as JSON files: qbo-tokens/{realmId}.json
// Uses @vercel/blob for serverless-compatible persistence.

const { put, list, del, head } = require('@vercel/blob');

const PREFIX = 'qbo-tokens/';

/**
 * Store tokens for a QBO company.
 */
async function storeTokens(realmId, tokens) {
  const record = {
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
    realm_id: realmId,
    expires_at: Date.now() + (tokens.expires_in || 3600) * 1000,
    refresh_expires_at: Date.now() + (tokens.x_refresh_token_expires_in || 8726400) * 1000,
    created_at: tokens.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  await put(`${PREFIX}${realmId}.json`, JSON.stringify(record), {
    access: 'public',
    addRandomSuffix: false,
    contentType: 'application/json',
  });

  return record;
}

/**
 * Get tokens for a QBO company. Returns null if not found.
 */
async function getTokens(realmId) {
  try {
    const blobUrl = await findBlobUrl(realmId);
    if (!blobUrl) return null;

    const response = await fetch(blobUrl);
    if (!response.ok) return null;

    const record = await response.json();
    record.is_expired = Date.now() > record.expires_at;
    record.refresh_is_expired = Date.now() > record.refresh_expires_at;
    return record;
  } catch (err) {
    console.error('getTokens error:', err.message);
    return null;
  }
}

/**
 * Delete tokens for a QBO company (on disconnect/revoke).
 */
async function deleteTokens(realmId) {
  const blobUrl = await findBlobUrl(realmId);
  if (blobUrl) {
    await del(blobUrl);
  }
}

/**
 * List all connected realm IDs.
 */
async function listConnections() {
  const realms = [];
  let cursor;
  do {
    const result = await list({ prefix: PREFIX, cursor });
    for (const blob of result.blobs) {
      const name = blob.pathname.replace(PREFIX, '').replace('.json', '');
      if (name) realms.push(name);
    }
    cursor = result.cursor;
  } while (cursor);
  return realms;
}

/**
 * Find the blob URL for a realm's token file.
 */
async function findBlobUrl(realmId) {
  const result = await list({ prefix: `${PREFIX}${realmId}.json` });
  if (result.blobs.length > 0) {
    return result.blobs[0].url;
  }
  return null;
}

module.exports = { storeTokens, getTokens, deleteTokens, listConnections };
