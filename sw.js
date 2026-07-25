// Kill-switch service worker.
//
// The old Gatsby site shipped a Workbox service worker (gatsby-plugin-offline)
// that precached the site shell. Returning visitors still have it registered,
// and it will keep serving the stale Gatsby pages forever unless it is replaced.
// Serving this file at the same URL causes the browser to take it as an update,
// which then clears every cache, unregisters itself, and reloads open tabs onto
// the new Next.js site.
//
// Safe to delete once traffic from pre-migration visitors has died off.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
