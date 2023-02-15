import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        port: 5173,
        // open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
    },
    preview: {
        host: true,
        port: 5173
    }
})
