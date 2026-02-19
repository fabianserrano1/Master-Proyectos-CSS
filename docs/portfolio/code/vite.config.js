// vite.config.js
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { resolve } from 'path'

// Obtener __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Detectar si estamos en producción
const isProduction = process.env.NODE_ENV === 'production'

// Exportar configuración
export default defineConfig({
  base: '/Master-Proyectos-CSS/portfolio/code/dist/', // esto asegura que GitHub Pages encuentre assets
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});