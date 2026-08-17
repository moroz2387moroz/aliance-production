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

  let currentModal; // текущее окно
  let modalDialog; // белое окно

  const modalBts = document.querySelectorAll("[data-toggle=modal]"); // свитчеры модальных окон
  modalBts.forEach((bts) => {
    bts.addEventListener("click", (event) => {
      // клик по свитчеру
      event.preventDefault();
      currentModal = document.querySelector(bts.dataset.target);
      currentModal.classList.toggle("is-open");
      modalDialog = currentModal.querySelector(".modal-dialog");
      currentModal.addEventListener("click", (event) => {
        if (!event.composedPath().includes(modalDialog)) {
          currentModal.classList.remove("is-open");
        }
      });
    });
  });

  document.addEventListener("keyup", (event) => {
    if (
      event.key === "Escape" &&
      currentModal &&
      currentModal.classList.contains("is-open")
    ) {
      currentModal.classList.toggle("is-open");
    }
  });

  const forms = document.querySelectorAll("form");
  const alertModal = document.querySelector("#alert-modal");
  const specialModal = document.querySelector("#feedback-modal");

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
              console.log(alertModal);
              alertModal.classList.add("is-open");
              specialModal.classList.remove("is-open");
              currentModal = alertModal;
              modalDialog = currentModal.querySelector(".modal-dialog");
              currentModal.addEventListener("click", (event) => {
                if (
                  modalDialog &&
                  !event.composedPath().includes(modalDialog)
                ) {
                  currentModal.classList.remove("is-open");
                }
              });
            } else {
              console.log("Ошибка! Текст ошибки: " + response.statusText);
            }
          });
        };
        ajaxSend(formData);
      });
  });

  const phoneInputs = document.querySelectorAll(
    'input[name="userphone"], input[type="tel"]',
  );

  //маска для телефона из урока

  /* Создаем префикс +7, даже если вводят 8 или 9 */
  const prefixNumber = (str) => {
    /* если вводят семерку, добавляем ей скобку */
    if (str === "7") {
      return "7 (";
    }
    /* если вводят восьмерку, ставим вместо нее +7 ( */
    if (str === "8") {
      return "+7 (";
    }
    /* если пишут девятку, заменяем на +7 (9   */
    if (str === "9") {
      return "7 (9";
    }
    /* в других случаях просто 7 (   */
    return "7 (";
  }; /* профикс в любом раскладе будет +7 () */

  /* Ловим события ввода в любом поле */
  document.addEventListener("input", (e) => {
    /* Проверяем, что это поле имеет класс phone-mask */
    if (e.target.classList.contains("phone-mask")) {
      /* поле с телефоном помещаем в переменную input */
      const input = e.target;
      /* вставляем плюс в начале номера */
      const value = input.value.replace(/\D+/g, "");
      /* длинна номера 11 символов */
      const numberLength = 11;

      /* Создаем переменную, куда будем записывать номер */
      let result;
      /* Если пользователь ввел 8... */
      if (input.value.includes("+8") || input.value[0] === "8") {
        /* Стираем восьмерку */
        result = "";
      } else {
        /* Оставляем плюсик в поле */
        result = "+";
      }

      /* Запускаем цикл, где переберем каждую цифру от 0 до 11 */
      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            /* в самом начале ставим префикс +7 ( */
            result += prefixNumber(value[i]);
            continue;
          case 4:
            /* добавляем после "+7 (" круглую скобку ")" */
            result += ") ";
            break;
          case 7:
            /* дефис после 7 символа */
            result += "-";
            break;
          case 9:
            /* еще дефис  */
            result += "-";
            break;
          default:
            break;
        }
        /* на каждом шаге цикла добавляем новую цифру к номеру */
        result += value[i];
      }
      /* итог: номер в формате +7 (999) 123-45-67 */
      input.value = result;
    }
  });

  // маска для телефона от AI

  // phoneInputs.forEach((input) => {
  //   input.addEventListener("input", () => {
  //     let value = input.value.replace(/\D/g, "").substring(0, 11);

  //     if (!value) {
  //       input.value = "";
  //       return;
  //     }

  //     if (value.startsWith("8")) {
  //       value = "7" + value.slice(1);
  //     }

  //     if (!value.startsWith("7")) {
  //       value = "7" + value;
  //     }

  //     let formatted = "+7";

  //     if (value.length > 1) {
  //       formatted += " (" + value.slice(1, 4);
  //     }
  //     if (value.length > 4) {
  //       formatted += ") " + value.slice(4, 7);
  //     }
  //     if (value.length > 7) {
  //       formatted += "-" + value.slice(7, 9);
  //     }
  //     if (value.length > 9) {
  //       formatted += "-" + value.slice(9, 11);
  //     }

  //     input.value = formatted;
  //   });
  // });
});
