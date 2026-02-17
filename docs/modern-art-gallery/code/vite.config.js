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
  base: isProduction
    ? '/Master-Proyectos-CSS/modern-art-gallery/code/dist/' // ruta absoluta en GitHub Pages
    : '/', // ruta raíz en desarrollo
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
