// Vite exposes the configured `base` (see vite.config.js) as BASE_URL:
// "/" in dev, "/Portfolio/" in the production build.
const BASE_URL = import.meta.env.BASE_URL;

// For react-router's basename (no trailing slash).
export const BASENAME = BASE_URL === "/" ? "/" : BASE_URL.replace(/\/$/, "");

// For plain <a href> links that need a full navigation back to "/"
// from a nested route (e.g. "/#contact" in dev, "/Portfolio/#contact" in prod).
export const HOME_BASE = BASENAME === "/" ? "" : BASENAME;

// Resolves a public/ asset path (e.g. "img/blog1.webp") to an absolute
// URL anchored at the site root, so it renders correctly no matter how
// deep the current client-side route is (e.g. /blog/some-post).
export function asset(path) {
  return BASE_URL + path.replace(/^\//, "");
}
