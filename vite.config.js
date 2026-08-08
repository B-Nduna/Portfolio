import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Absolute base so runtime asset URLs (built via BASE_URL in src/lib/env.js)
  // resolve correctly from any client-side route depth, e.g. /blog/some-post.
  // Matches the GitHub Pages project subpath (repo name "Portfolio").
  base: command === 'build' ? '/Portfolio/' : '/',
}))
