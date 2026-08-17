<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title><?= $page_title ?> - Aliance Production</title>
  </head>
  <body>
    <div class="mobile-menu">
      <ul class="mobile-menu-nav">
        <li class="mobile-menu-item">
          <a href="/about.php" class="mobile-menu-link">О компании</a>
        </li>
        <li class="mobile-menu-item">
          <a href="/contract.php" class="mobile-menu-link">Контрактное производство</a>
          <ul class="mobile-submenu">
            <li class="mobile-submenu-item">
              <a href="#" class="mobile-submenu-link">Автомобильная химия</a>
            </li>
            <li class="mobile-submenu-item">
              <a href="#" class="mobile-submenu-link">Бытовая химия</a>
            </li>
            <li class="mobile-submenu-item">
              <a href="#" class="mobile-submenu-link"
                >Дезинфицирующие средства</a
              >
            </li>
            <li class="mobile-submenu-item">
              <a href="#" class="mobile-submenu-link">Пищевые аэрозоли</a>
            </li>
            <li class="mobile-submenu-item">
              <a href="#" class="mobile-submenu-link"
                >Косметическая продукция</a
              >
            </li>
            <li class="mobile-submenu-item">
              <a href="#" class="mobile-submenu-link">Краски аэрозольные</a>
            </li>
          </ul>
        </li>
        <li class="mobile-menu-item">
          <a href="/own.php" class="mobile-menu-link">Собственные торговые марки</a>
          <ul class="mobile-submenu">
            <li class="mobile-submenu-item">
              <a href="#" class="mobile-submenu-link">Автохимия AG-Tech</a>
            </li>
            <li class="mobile-submenu-item">
              <a href="#" class="mobile-submenu-link">Автохимия AP</a>
            </li>
          </ul>
        </li>
        <li class="mobile-menu-item">
          <a href="#" class="mobile-menu-link">Новости</a>
        </li>
        <li class="mobile-menu-item">
          <a href="#" class="mobile-menu-link">Контакты</a>
        </li>
      </ul>
      <a href="tel:+74996861014" class="mobile-phone">+7 (499) 686-10-14</a>
      <div class="mobile-info">
        <svg class="phone-icon" width="24" height="24">
          <use href="img/sprite.svg#mark"></use>
        </svg>
        <address class="mobile-info-addres">
          г. Мосвка, Холодильный пер. 4к1с8
        </address>
      </div>
      <div class="mobile-info">
        <svg class="phone-icon" width="24" height="24">
          <use href="img/sprite.svg#mail"></use>
        </svg>
        <a class="mobile-info-email" href="mailto:a.dragunov@tdaliance.ru">
          a.dragunov@tdaliance.ru
        </a>
      </div>
      <div class="mobile-social">
        <a href="#">
          <svg class="phone-icon" width="24" height="24">
            <use href="img/sprite.svg#vk"></use>
          </svg> </a
        ><a href="#">
          <svg class="phone-icon" width="24" height="24">
            <use href="img/sprite.svg#inst"></use>
          </svg>
        </a>
      </div>
    </div>
    <nav class="navbar navbar-light">
      <a href="#" class="mobile-menu-toggle">
        <div class="mobile-menu-line"></div>
        <div class="mobile-menu-line"></div>
        <div class="mobile-menu-line"></div>
      </a>
      <a href="index.php" class="header-logo">
        <svg class="logo-svg logo-light">
          <use href="img/sprite.svg#logo-light"></use>
        </svg>
        <svg class="logo-svg logo-dark">
          <use href="img/sprite.svg#logo"></use>
        </svg>
      </a>
      <ul class="header-nav">
        <li class="header-nav-item">
          <a href="/about.php" class="header-nav-link">О компании</a>
        </li>
        <li class="header-nav-item">
          <a href="/contract.php" class="header-nav-link">Контрактное производство</a>
        </li>
        <li class="header-nav-item">
          <a href="/own.php" class="header-nav-link">Собственные торговые марки</a>
        </li>
        <li class="header-nav-item">
          <a href="#" class="header-nav-link">Новости</a>
        </li>
        <li class="header-nav-item">
          <a href="#" class="header-nav-link">Контакты</a>
        </li>
      </ul>
      <div class="header-phone">
        <svg class="phone-icon" width="24" height="24">
          <use href="img/sprite.svg#phone"></use></svg
        ><a href="tel:+74996861014" class="header-phone-link"
          >+7 (499) 686-10-14</a
        >
      </div>
      <button class="header-button button" data-toggle="modal" data-target="#feedback-modal">
        <svg class="icon-bts" width="24" height="24">
          <use href="img/sprite.svg#phone"></use>
        </svg>
        <span class="text-bts">Получить консультацию</span>
      </button>
    </nav>

    <header class="header header-image <?= $header_style; ?>">
      <div class="header-bg <?= $block_non; ?>">
        <div class="kunteynir">
        <div class="header-content <?= $header_content_style; ?>">
<picture class="picture object-fit-cover">
    <source srcset="img/avto-him-bg.webp" type="image/webp">
    <source srcset="img/avto-him-bg.png" type="image/png">
    <img
      src="img/avto-him-bg.png"
      alt="header"
      class="h-img <?= $block_none; ?>"
      width="1600"
      height="900"
    >
  </picture>
          <div class="seporator"></div>
          <h1 class="header-title <?= $title_style; ?>"><?= $page_title ?></h1>
          <div class="breadcrumbs">
            <a href="index.php" class="breadcrumb-link">Главная</a>
            <span class="breadcrumb-separator">&mdash;</span>
            <span class="breadcrumb-text"><?= $page_title ?></span>
          </div>
        </div></div>
      </div>
    </header>