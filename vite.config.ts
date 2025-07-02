import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '977d-2409-40d4-111c-6287-5e1-846a-c92f-3d0.ngrok-free.app'
    ]
  }
})
