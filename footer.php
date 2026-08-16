 <section class="cta">
      <div class="bg-grey section-cta">
        <img src="img/bg-cta.png" alt="call to action" class="cta-image" />
        <div class="cta-form-wrapper kunteynir">
          <form action="handler.php" method="POST" class="cta-form">
            <h2 class="section-title cta-form-title">Хотите сотрудничать?</h2>
            <p class="cta-form-text">
              Оставьте заявку, наш менеджер свяжется с&nbsp;Вами
              в&nbsp;ближайшее время ответит на&nbsp;все
              интересующие&nbsp;вопросы и&nbsp;поможем даже в&nbsp;самых
              сложных&nbsp;случаях!
            </p>
            <div class="input-group-wrapper">
              <div class="input-group">
                <input
                  id="user-name"
                  name="username"
                  type="text"
                  class="input"
                  placeholder=" "
                  maxlength="100"
                  required
                />
                <label class="input-group-label" for="user-name">Имя</label>
              </div>
              <div class="input-group">
                <input
                  id="user-phone"
                  name="userphone"
                  type="tel"
                  class="input"
                  placeholder=" "
                  maxlength="30"
                  required
                />
                <label class="input-group-label" for="user-phone"
                  >Номер телефона</label
                >
              </div>
            </div>
            <div class="cta-form-footer">
              <button type="submit" class="button cta-form-bts">
                Отправить заявку
              </button>
              <div class="notify">
                <svg class="form-icon" width="14" height="14">
                  <use href="img/sprite.svg#not-y"></use>
                </svg>
                <p class="notify-text">
                  Обращаясь к&nbsp;нам вы&nbsp;получаете не&nbsp;только
                  профессиональную работу, но&nbsp;и&nbsp;абсолютную
                  конфиденциальность информации!
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="kunteynir">
        <div class="footer-high">
          <svg class="footer-logo">
            <use href="img/sprite.svg#logo"></use>
          </svg>
          <a href="tel:+79249263329" class="footer-phone">+7 (924) 926-33-29</a>
          <div class="footer-info">
            <svg class="phone-icon" width="24" height="24">
              <use href="img/sprite.svg#mark"></use>
            </svg>
            <address class="footer-info-addres">
              г. Мосвка, Холодильный пер. 4к1с8
            </address>
          </div>
          <div class="footer-info">
            <svg class="mail-icon" width="24" height="24">
              <use href="img/sprite.svg#mail"></use>
            </svg>
            <a class="footer-info-email" href="mailto:a.dragunov@tdaliance.ru">
              a.dragunov@tdaliance.ru
            </a>
          </div>
          <div class="footer-social">
            <a href="#" class="footer-social-link">
              <svg class="footer-social-icon" width="24" height="24">
                <use href="img/sprite.svg#vk"></use></svg
            ></a>
            <a href="#" class="footer-social-link">
              <svg class="footer-social-icon" width="24" height="24">
                <use href="img/sprite.svg#inst"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr class="footer-sep" />
      <div class="kunteynir">
        <div class="footer-low">
          <div class="footer-menu-wrapper">
            <h2 class="footer-menu-title">Контрактное производство</h2>
            <ul class="footer-menu-list footer-menu-columns">
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">Автомобильная химия</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">Бытовая химия</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link"
                  >Дезинфицирующие средства</a
                >
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">Пищевые аэрозоли</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">Косметическая продукция</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">Краски аэрозольные</a>
              </li>
            </ul>
          </div>
          <div class="footer-menu-wrapper">
            <h2 class="footer-menu-title">Собственные марки</h2>
            <ul class="footer-menu-list">
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">Автохимия AG-Tech</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link">Автохимия AP</a>
              </li>
            </ul>
          </div>
          <div class="footer-menu-wrapper">
            <ul class="footer-menu-list">
              <li class="footer-menu-item">
                <a href="/about.htl" class="footer-menu-link bold"
                  >О компании</a
                >
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link bold">Новости</a>
              </li>
              <li class="footer-menu-item">
                <a href="#" class="footer-menu-link bold">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="footer-sep" />
      <div class="kunteynir">
        <div class="footer-wrap">
          <div class="footer-legal">
            <p class="footer-copy">
              &copy; <?php echo date('Y'); ?> «Aliance Production». Все права защищены.
            </p>
            <a href="#" class="footer-policy">Политики конфиденциальности</a>
          </div>
          <div class="footer-author">
            <span class="made-in">Сделано в</span>
            <svg class="made-icon" width="52" height="11">
              <use href="img/sprite.svg#ruso"></use>
            </svg>
          </div>
        </div>
      </div>
    </footer>

    <div class="modal">
      <div class="modal-dialog">
        <h2 class="modal-title">Есть вопросы?</h2>
        <a href="#" class="modal-close" data-toggle="modal"
          ><svg class="cl-icon">
            <use href="img/sprite.svg#close"></use></svg
        ></a>
        <p class="modal-text">
          Оставьте заявку, наш менеджер свяжется с Вами&nbsp;в&nbsp;ближайшее
          время ответит на&nbsp;все интересующие вопросы и поможем&nbsp;даже в
          самых&nbsp;сложных случаях!
        </p>
        <form action="#" class="modal-form">
          <div class="input-group-wrapper input-group-vertical">
            <div class="input-group modal-input-group">
              <input
                id="m-user-name"
                type="text"
                class="input modal-input"
                placeholder=" "
              />
              <label
                class="input-group-label modal-input-label"
                for="m-user-name"
                >Имя</label
              >
            </div>
            <div class="input-group modal-input-group">
              <input
                id="m-user-phone"
                type="tel"
                class="input modal-input"
                placeholder=" "
              />
              <label
                class="input-group-label modal-input-label"
                for="m-user-phone"
                >Номер телефона</label
              >
            </div>
          </div>
          <div class="modal-form-footer">
            <button type="submit" class="button modal-form-bts">
              Отправить заявку
            </button>
            <div class="notify">
              <svg class="form-icon" width="14" height="14">
                <use href="img/sprite.svg#not-y"></use>
              </svg>
              <p class="notify-text">
                Обращаясь к&nbsp;нам вы&nbsp;получаете не&nbsp;только
                профессиональную работу, но&nbsp;и&nbsp;абсолютную
                конфиденциальность информации!
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>

    <script src="js/swiper-bundle.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
