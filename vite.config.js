import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import pkg from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'ScrollSpyTree',
      // the proper extensions will be added
      fileName: (format) => `js/${pkg.name}` + (format !== 'es' ? `.${format}` : '') + '.js'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['bootstrap'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          bootstrap: 'bootstrap'
        },
        assetFileNames: 'css/[name].min.[ext]'
      }
    }
  },
  plugins: [
    banner(
      `\n * ScrollSpyTree v${pkg.version}` +
      `\n * Homepage (${pkg.homepage})` +
      `\n * Copyright ${pkg.author}` +
      `\n * License: ${pkg.license}\n`
    )
  ]
})