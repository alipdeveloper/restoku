/* eslint-disable no-restricted-globals */
import "regenerator-runtime";
import Caching from "./utils/caching";

const { assets } = global.serviceWorkerOption;

self.addEventListener("install", (event) => {
  event.waitUntil(Caching.cachingAppShell([...assets, "./"]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(Caching.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(Caching.revalidateCache(event.request));
});
