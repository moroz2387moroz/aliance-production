const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.style.display = "block";
  logoLight.style.display = "none";
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.style.display = "none";
  logoLight.style.display = "block";
};

const openMenu = (event) => {
  menu.classList.add("is-open");
  menuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden";
  lightModeOn();
};

const closeMenu = (event) => {
  menu.classList.remove("is-open");
  menuToggle.classList.remove("close-menu");
  document.body.style.overflow = "";
  lightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

menuToggle.addEventListener("click", (event) => {
  console.log("飞鸥不下");
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

const sw = new Swiper(".sw", {
  loop: true,
  speed: 400,
  navigation: {
    nextEl: ".slider-bts-next",
    prevEl: ".slider-bts-prev",
  },
  slidesPerView: 1,
  breakpoints: {
    375: {
      slidesPerView: 2,
      centeredSlides: true,
      slidesOffsetBefore: -100,
      spaceBetween: -35,
    },
    400: {
      slidesPerView: 2,
      centeredSlides: false,
      slidesOffsetBefore: 0,
      spaceBetween: 0,
    },
    769: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1201: {
      slidesPerView: 5,
    },
  },
});

const ssw = new Swiper(".ssw", {
  loop: true,
  speed: 400,
  navigation: {
    nextEl: ".sl-bts-next",
    prevEl: ".sl-bts-prev",
  },
  slidesPerView: 1,
  breakpoints: {
    375: {
      slidesPerView: 1.5,
      // centeredSlides: true,
      // slidesOffsetBefore: -100,
    },
    576: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1201: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1461: {
      slidesPerView: 4,
      spaceBetween: -125,
    },
  },
});

const swBlog = new Swiper(".sw-blog", {
  loop: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".sll-bts-next",
    prevEl: ".sll-bts-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
    },
  },
});

const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");

document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes(modalDialog) &&
      modal.classList.contains("is-open"))
  ) {
    event.preventDefault();
    modal.classList.toggle("is-open");
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    modal.classList.toggle("is-open");
  }
});
