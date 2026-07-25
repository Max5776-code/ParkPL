const CACHE="parkpl-v0.2";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.svg","./icon-512.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
