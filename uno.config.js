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
    ["max-h-screen", "max-height: 100vh"],
    // Component shortcuts
    // [
    //   "btn-primary",
    //   "bg-hotel-green hover:bg-hotel-lime text-white px-8 py-3 text-lg rounded-lg transition-colors duration-300 cursor-pointer",
    // ],
    // [
    //   "card-amenity",
    //   "bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg",
    // ],
    // ["nav-link", "text-gray-600 hover:text-hotel-teal transition-colors"],
    // [
    //   "mobile-nav-link",
    //   "text-gray-600 hover:text-hotel-teal transition-colors py-2 border-b border-gray-100",
    // ],
    // ["gallery-item", "group cursor-pointer"],
    // [
    //   "gallery-image",
    //   "object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300",
    // ],
    // [
    //   "gallery-overlay",
    //   "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
    // ],
    // [
    //   "amenity-icon",
    //   "w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-hotel-green to-hotel-teal rounded-full flex items-center justify-center",
    // ],
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
  safelist: [
    // Ensure these classes are always generated
    // "container",
    // "mx-auto",
    // "btn-primary",
    // "card-amenity",
    // "nav-link",
    // "mobile-nav-link",
    // "gallery-item",
    // "gallery-image",
    // "gallery-overlay",
    // "amenity-icon",
    // "logo-circle",
    // "text-hotel-green",
    // "text-hotel-teal",
    // "text-hotel-lime",
    // "bg-hotel-green",
    // "bg-hotel-teal",
    // "bg-hotel-lime",
    // "hover:text-hotel-green",
    // "hover:text-hotel-teal",
    // "hover:text-hotel-lime",
    // "hover:bg-hotel-green",
    // "hover:bg-hotel-teal",
    // "hover:bg-hotel-lime",
    // UnoCSS icon classes
    // "i-heroicons-bars-3",
    // "i-heroicons-x-mark",
    // "i-heroicons-wifi",
    // "i-heroicons-truck",
    // "i-heroicons-building-storefront",
    // "i-material-symbols-waves",
    // "i-heroicons-sun",
    // "i-heroicons-bolt",
    // "i-heroicons-map-pin",
    // "i-heroicons-phone",
    // "i-heroicons-envelope",
  ],
});
