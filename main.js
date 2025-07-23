import "virtual:uno.css";
import "./style.css";
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import focus from "@alpinejs/focus";

import { lightbox } from "./lightbox.js";
import { thumbnails } from "./utils/globs";

Alpine.store("mobileMenu", {
  isOpen: false,

  showMenu() {
    this.isOpen = true;
  },

  hideMenu() {
    this.isOpen = false;
  },

  toggle() {
    console.log("toggle");
    this.isOpen = !this.isOpen;
  },
});

Alpine.data("galleryThumbnails", () => {
  return {
    thumbnails,

    lightboxInit() {
      lightbox.init();
      import("photoswipe");
    },
  };
});

Alpine.plugin(intersect);
Alpine.plugin(focus);

Alpine.start();

window.pswpLightbox = lightbox;
