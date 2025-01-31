import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    allowedHosts: [
      "5173-shubhdev-taskmanager-l06dr3q8bkv.ws-us117.gitpod.io", // Your specific Gitpod URL
      '.gitpod.io' // Allow all Gitpod subdomains (more flexible)
    ],
    // OR, even better for Gitpod:
    // allowedHosts: true, // Allow all hosts (simplest in Gitpod)
  },
  // optimizeDeps: {
  //   exclude: ['@supabase/supabase-js'],
  // },
})
