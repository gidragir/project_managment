import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        host_client: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
})
