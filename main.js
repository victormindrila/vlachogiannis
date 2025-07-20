import "virtual:uno.css";
import "./style.css";
import Alpine from "alpinejs";
import { lightbox } from "./photo-swipe.js";

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

Alpine.start();
lightbox.init();
