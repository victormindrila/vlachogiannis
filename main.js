import "virtual:uno.css";
import "./style.css";
// import Alpine from "alpinejs";

// Alpine.start();

import { lightbox } from "./photo-swipe.js";

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

const showMenu = () => {
  mobileMenu.classList.remove("max-h-0");
  mobileMenu.classList.add("min-h-40");
  menuIcon.classList.add("hidden"); // hide the menu icon
  closeIcon.classList.remove("hidden"); // show the close icon
};

const hideMenu = () => {
  mobileMenu.classList.remove("min-h-40");
  mobileMenu.classList.add("max-h-0");
  menuIcon.classList.remove("hidden"); // show the menu icon
  closeIcon.classList.add("hidden"); // hide the close icon
};

// Toggle mobile menu
mobileMenuBtn.addEventListener("click", function () {
  if (mobileMenu.classList.contains("max-h-0")) {
    showMenu();
  } else {
    hideMenu();
  }
});

mobileMenu.addEventListener("click", function () {
  const isLink = event.target.tagName === "A";
  // if the clicked element is a link, close the menu
  if (isLink) {
    hideMenu();
  }
});

// Close mobile menu when clicking on links
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    console.log("clicked");
    hideMenu();
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnMenuButton = mobileMenuBtn.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnMenuButton &&
    mobileMenu.classList.contains("min-h-40")
  ) {
    hideMenu();
  }
});

// Close mobile menu on escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && mobileMenu.classList.contains("max-h-40")) {
    hideMenu();
  }
});

lightbox.init();
