import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from "unocss";
import presetWind4 from "@unocss/preset-wind4";

// import presetMini from "@unocss/preset-mini";

export default defineConfig({
  presets: [
    presetWind4(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        heroicons: () =>
          import("@iconify-json/heroicons/icons.json", {
            with: { type: "json" },
          }).then((i) => i.default),
        "material-symbols": () =>
          import("@iconify-json/material-symbols/icons.json", {
            with: { type: "json" },
          }).then((i) => i.default),
      },
    }),
  ],
  theme: {
    colors: {
      "hotel-green": "#a6c154",
      "hotel-teal": "#08a080",
      "hotel-lime": "#b2cd64",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  shortcuts: [
    ["header", "bg-white shadow-lg sticky w-full top-0 z-50"],
    [
      "pswp-gallery",
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto",
    ],
    [
      "gallery-image",
      "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
    ],
    [
      "gallery-item",
      "block aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300",
    ],
    ["amenities-grid", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"],
    [
      "amenity-card",
      "bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg",
    ],
    [
      "amenity-icon",
      "w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-hotel-green to-hotel-teal rounded-full flex items-center justify-center",
    ],
    [
      "primary-btn",
      "bg-hotel-green hover:bg-hotel-lime text-white px-8 py-3 text-lg rounded-lg transition-colors duration-300 cursor-pointer inline-flex items-center space-x-2",
    ],
  ],
  rules: [
    // Custom gradient rules
    [
      "bg-gradient-hotel-green-teal",
      { "background-image": "linear-gradient(to right, #a6c154, #08a080)" },
    ],
    [
      "bg-gradient-hotel-teal-lime",
      { "background-image": "linear-gradient(to right, #08a080, #b2cd64)" },
    ],
    [
      "bg-gradient-hotel-green-lime",
      { "background-image": "linear-gradient(to right, #a6c154, #b2cd64)" },
    ],
    ["max-h-40", "max-height: 40vh"],
  ],
  safelist: [],
});
