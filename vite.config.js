import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import unocss from "unocss/vite";
import yearPlugin from "@8hobbies/vite-plugin-year";
import htmlMinifier from "vite-plugin-html-minifier";
import webfontDownload from "vite-plugin-webfont-dl";
import { imagetools } from "vite-imagetools";

const HOST = "localhost";
const PORT = 3000;

export default defineConfig({
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
  server: {
    host: HOST,
    port: PORT,
  },
  plugins: [
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
      "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
    ]),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
    unocss(),
    yearPlugin(),
    htmlMinifier({
      minify: true,
    }),
    imagetools({
      removeMetadata: true,
    }),
  ],
});
