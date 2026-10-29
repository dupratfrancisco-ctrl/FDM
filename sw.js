// Guarda la app para que abra rápido y sin señal; los datos quedan en el celular.
const CACHE = "fdm-v31";
const SHELL = ["./", "index.html", "manifest.webmanifest", "pdf.min.js", "pdf.worker.min.js", "icons/apple-touch-icon-negro.png", "icons/icon-192-negro.png", "icons/icon-512-negro.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("fdm-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req, {cache:"no-cache"}).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put("index.html", copy)); return r; }).catch(() => caches.match("index.html")));
    return;
  }
  // El lector de capturas es pesado: se guarda recién la primera vez que se usa
  const keep = new URL(req.url).pathname.includes("/ocr/");
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (keep && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return r; })));
});
