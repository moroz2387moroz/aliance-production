document.addEventListener("DOMContentLoaded", () => {
  console.log("start");

  const navbar = document.querySelector(".navbar");
  const logoLight = document.querySelector(".logo-light");
  const logo = document.querySelector(".logo");
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const isFront = document.body.classList.contains("front-page");

  const lightModeOn = (event) => {
    navbar.classList.add("navbar-light");
  };

  const lightModeOff = (event) => {
    navbar.classList.remove("navbar-light");
  };

  const changeNavHeight = (height) => {
    navbar.style.height = height;
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
    this.scrollY > 1 ? changeNavHeight("4.5rem") : changeNavHeight("5.875rem");
    if (isFront) {
      this.scrollY > 1 ? lightModeOn() : lightModeOff();
    }
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

  const forms = document.querySelectorAll("form");
  const superModal = document.querySelector(".super");

  forms.forEach((form) => {
    console.log("Form");
    const validator = new JustValidate(form, {
      errorFieldCssClass: "is-invalid",
    });
    validator
      .addField("[name=username]", [
        {
          rule: "required",
          errorMessage: "Укажите имя",
        },
        {
          rule: "maxLength",
          value: 50,
          errorMessage: "Максимально 50 символов",
        },
      ])
      .addField("[name=userphone]", [
        {
          rule: "required",
          errorMessage: "Укажите телефон",
        },
      ])
      .onSuccess((event) => {
        const thisForm = event.target;
        const formData = new FormData(thisForm);
        const ajaxSend = (formdata) => {
          fetch(thisForm.getAttribute("action"), {
            method: thisForm.getAttribute("method"),
            body: formData,
          }).then((response) => {
            if (response.ok) {
              thisForm.reset();
              superModal.classList.add("is-open");
            } else {
              console.log("Ошибка! Текст ошибки: ".response.statusText);
            }
          });
        };
        ajaxSend(formData);
      });
  });

  const phoneInputs = document.querySelectorAll(
    'input[name="userphone"], input[type="tel"]',
  );

  // маска для телефона
  phoneInputs.forEach((input) => {
    input.addEventListener("input", () => {
      let value = input.value.replace(/\D/g, "").substring(0, 11);

      if (!value) {
        input.value = "";
        return;
      }

      if (value.startsWith("8")) {
        value = "7" + value.slice(1);
      }

      if (!value.startsWith("7")) {
        value = "7" + value;
      }

      let formatted = "+7";

      if (value.length > 1) {
        formatted += " (" + value.slice(1, 4);
      }
      if (value.length > 4) {
        formatted += ") " + value.slice(4, 7);
      }
      if (value.length > 7) {
        formatted += "-" + value.slice(7, 9);
      }
      if (value.length > 9) {
        formatted += "-" + value.slice(9, 11);
      }

      input.value = formatted;
    });
  });
});
