<template>
  <div>
    <footer class="footer">
      <div class="footer__wrapper">
        <ul class="footer__list footer__list--contacts">
          <li class="footer__item">8 (495) 555-67-07</li>
          <li class="footer__item">info@umed.ru</li>
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
          <li class="footer__item">
            <a class="footer__link">Корпоративные презентации</a>
          </li>
          <li class="footer__item">
            <a class="footer__link">Политика конфиденциальности</a>
          </li>
          <li class="footer__item">
            <a class="footer__link">Реквизиты</a>
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
   height: 100px;
   padding: 15px 0;
   background-color: #262626;
   color: #ffffff;
  }
  .footer__wrapper {
   width: 85%;
  }
  .footer__wrapper--sub {
    color: #7e7e7e;
  }
  .footer__list {
    @include reset-list;
    text-align: left;
  }
  .footer__list--menu {
    text-transform: uppercase;
  }
  .footer__link {
    @include reset-link;
    color: #ffffff;
  }
</style>
