import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/style.css";

export const lightbox = new PhotoSwipeLightbox({
  gallery: "#my-gallery",
  children: "a",
  // delay the import to test how it works with lazy loading
  pswpModule: () => import("photoswipe"),
});
