import 'virtual:uno.css';
import './style.css';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import anchor from '@alpinejs/anchor';

import { lightbox } from './lightbox.js';
import { thumbnails } from './utils/globs';

Alpine.store('mobileMenu', {
  isOpen: false,

  showMenu() {
    this.isOpen = true;
  },

  hideMenu() {
    this.isOpen = false;
  },

  toggle() {
    this.isOpen = !this.isOpen;
  }
});

Alpine.data('galleryThumbnails', () => {
  return {
    thumbnails
  };
});

Alpine.plugin(focus);
Alpine.plugin(anchor);

Alpine.start();

lightbox.init();

window.pswpLightbox = lightbox;
