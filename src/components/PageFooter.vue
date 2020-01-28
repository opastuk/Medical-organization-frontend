<template>
  <div>
    <footer class="footer">
      <div class="footer__wrapper">
        <ul class="footer__list footer__list--contacts">
          <li class="footer__item footer__item--contacts footer__item--tel">8 (495) 555-67-07</li>
          <li class="footer__item footer__item--contacts footer__item--email">info@umed.ru</li>
        </ul>
        <ul class="footer__list footer__list--menu">
          <li class="footer__item">
            <a class="footer__link">Памятка</a>
          </li>
          <li class="footer__item">
            <a class="footer__link">Карьера</a>
          </li>
          <li class="footer__item">
            <a class="footer__link">Каталоги</a>
          </li>
          <li class="footer__item">
            <a class="footer__link">Контакты</a>
          </li>
        </ul>
      </div>
      <div class="footer__wrapper footer__wrapper--sub">
        <ul class="footer__list footer__list--sub-menu">
          <li class="footer__item footer__item--sub-menu">
            <a class="footer__link footer__link--sub-menu">Корпоративные презентации</a>
          </li>
          <li class="footer__item footer__item--sub-menu">
            <a class="footer__link footer__link--sub-menu">Политика конфиденциальности</a>
          </li>
          <li class="footer__item footer__item--sub-menu">
            <a class="footer__link footer__link--sub-menu">Реквизиты</a>
          </li>
        </ul>
        <span class="footer__promo">©ООО "Юмед" 2019г. Все права защищены.</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

  @Component({})
export default class PageFooter extends Vue {

  }
</script>

<style scoped lang="scss">
  .footer {
   padding: 15px;
   background-color: #262626;
   color: #ffffff;
  }
  .footer__wrapper {
   width: 100%;
  }
  .footer__list {
    @include reset-list;
    text-align: left;
    padding: 15px 0;
    border-bottom: 1px solid #7e7e7e;
  }
  .footer__list--contacts {
    padding-top: 0;
  }
  .footer__list--menu {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
  .footer__list--sub-menu {
    font-size: 10px;
    line-height: 13px;
    color: #7e7e7e;
    padding: 0;
    margin-bottom: 15px;
  }
  .footer__item {
    padding: 5px;
  }
  .footer__item--sub-menu {
    padding: 10px;
  }
  .footer__item--contacts {
    padding: 0;
    padding-left: 20px;
    position: relative;
  }
  .footer__item--tel::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background-image: url("../assets/svg/phone.svg");
    background-position: center;
    background-size: cover;
  }

  .footer__item--email::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background-image: url("../assets/svg/mail.svg");
    background-position: center;
    background-size: cover;
  }
  .footer__link {
    @include reset-link;
    color: #ffffff;
  }
  .footer__link:hover,
  .footer__link:focus {
    opacity: 0.5;
  }
  .footer__link--sub-menu {
    color: #7e7e7e;
  }
  .footer__promo {
    font-size: 10px;
    color: #7e7e7e;
  }
  @media (min-width: 760px) {
    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer__wrapper {
      width: 85%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer__wrapper--sub {
      border-top: 1px solid #7e7e7e;
      align-items: baseline;
    }
    .footer__list {
      border-bottom: none;
    }
    .footer__list--menu {
      padding-top: 0;
      text-align: right;
    }
    .footer__promo {
      order: 1;
    }
    .footer__list--sub-menu {
      display: flex;
      order: 2;
      margin-bottom: 0;
    }
    .footer__item--sub-menu {
      padding-bottom: 0;
    }
  }
</style>
