import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', //https://vitejs.dev/guide/static-deploy.html#github-pages
  plugins: [
    mdx({}),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto'
    })
  ]
})
