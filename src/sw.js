importScripts('https://faya:80.engagespot.co/sw.php?' + Math.random() * 5);
// https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
// ------------------------------
// Pre Cache and Update
// ------------------------------
importScripts('./workbox-sw.prod.v1.0.1.js');

const workboxSW = new WorkboxSW({ clientsClaim: true });
/**
 * precache() is passed a manifest of URLs and versions
 * each time the service worker starts up.
 * Use workbox-build to generate the manifest
 */
workboxSW.precache([]);
