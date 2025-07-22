import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import { fullImages } from "./utils/globs";

// Set up PhotoSwipe lightbox
const galleryEl = document.querySelector("#gallery--mixed-source");

const lightbox = new PhotoSwipeLightbox({
  dataSource: fullImages,
  pswpModule: () => import("photoswipe"),
});

// Configure lightbox to use thumbnail elements from the gallery
lightbox.addFilter("thumbEl", (thumbEl, data, index) => {
  const el = galleryEl?.querySelector('[data-id="' + data.id + '"] img');
  return el || thumbEl;
});

// Use thumbnail image as placeholder while loading
lightbox.addFilter("placeholderSrc", (placeholderSrc, slide) => {
  const el = galleryEl?.querySelector('[data-id="' + slide.data.id + '"] img');
  return el?.src || placeholderSrc;
});

export { lightbox };
