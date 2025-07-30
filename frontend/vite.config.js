import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    port: 5173
  },
  build: {
    outDir: path.resolve(__dirname, '../backend/public'),
    emptyOutDir: true,
  },
})
