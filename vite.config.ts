import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";
import { viteStaticCopy } from 'vite-plugin-static-copy';

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    viteStaticCopy({
      targets: [
        { // asset
          src: normalizePath( path.resolve(__dirname, './src/assets/*') ),
          dest: normalizePath( path.resolve(__dirname, './dist/assets') )
        },
      ],
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '%': path.resolve(__dirname, './blanco/main/typescript'),
    }
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8081
  }
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
