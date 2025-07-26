import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import unocss from 'unocss/vite';
import htmlMinifier from 'vite-plugin-html-minifier';
import webfontDownload from 'vite-plugin-webfont-dl';
import { imagetools } from 'vite-imagetools';

const HOST = 'localhost';
const PORT = 3000;

export default defineConfig({
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },
  server: {
    host: HOST,
    port: PORT
  },
  plugins: [
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap',
      'https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap'
    ]),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    unocss(),
    htmlMinifier({
      minify: true
    }),
    imagetools({
      removeMetadata: true
    })
  ]
});
