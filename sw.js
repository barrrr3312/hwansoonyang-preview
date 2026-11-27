'use strict';

const root = new URL(self.registration.scope);
const prefix = 'hwansoonyang:' + root.pathname + ':';
const cacheName = prefix + '20261127-pwa1';
const homepage = new URL('index.html', root).href;
const assets = [
  'index.html', 'manifest.webmanifest',
  'app.js', 'upgrade.js', 'cms.js', 'ui.css', 'cms.css', 'ranking-live.css',
  'ranking-live.js', 'ranking-data.js', 'data.js', 'pet-source.js',
  'visitor.js', 'pwa.js', 'banner.png',
  'icon-192.png', 'icon-512.png', 'icon-maskable.png', 'apple-touch-icon.png'
];
const urls = new Set(assets.map(file => new URL(file, root).href));

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll([...urls].map(url =>
    new Request(url, {cache:'reload'})
  ))));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(prefix) && name !== cacheName)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== root.origin) return;
  const normal = url.origin + url.pathname;
  const entry = req.mode === 'navigate' && (normal === root.href || normal === homepage)
    ? homepage : (urls.has(normal) ? normal : null);
  if (!entry) return;
  event.respondWith(networkFirst(req, entry, event));
});

async function networkFirst(request, entry, event) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request, {cache:'no-cache'});
    if (response.ok && !response.redirected) {
      event.waitUntil(cache.put(entry, response.clone()).catch(() => {}));
      return response;
    }
    if (response.status >= 500) return (await cache.match(entry)) || response;
    return response;
  } catch {
    return (await cache.match(entry)) || new Response('인터넷 연결이 필요합니다.', {
      status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}
    });
  }
}
