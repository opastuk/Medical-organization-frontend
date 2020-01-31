<template>
  <header class="page-header">
    <div class="page-header-container">
      <a class="page-header__logo-link"><img src="../assets/img/main-logo.png" alt="Юмед"></a>
      <button class="page-header__toggle"></button>
      <ul class="page-header__list">
        <li class="page-header__item">
          <a class="page-header__item">Главная</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__item">Новости</a>
        </li>
        <li class="page-header__item" @click="showAboutUsMenu = !showAboutUsMenu">О нас
          <ul class="page-header__list--sub" v-if="showAboutUsMenu">
            <li class="page-header__item--sub">
              <a class="page-header__item--sub">О компании</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__item--sub">Карьера</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__item--sub">Пациентам</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__item--sub">Реквизиты</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__item--sub">Презентации</a>
            </li>
          </ul>
        </li>
        <li class="page-header__item">
          <a class="page-header__item">Наши клиенты</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__item">Каталог</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__item">Контакты</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

    @Component({})
export default class PageHeader extends Vue {
        showAboutUsMenu = false;
    }
</script>

<style scoped lang="scss">
  .page-header {
    background-color: $blue;
    height: 54px;

    &-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      height: 100%;
      color: #ffffff;

      @media(min-width: 768px) {
        width: 690px;
      }

      @media(max-width: 767px) {
        width: 290px;
        padding: 10px;
      }

      @media(min-width: 1200px) {
        width: 1100px;
      }
    }

    &__list {
      display: flex;
      flex-direction: row;
      list-style: none;

      &--sub {
        position: absolute;
      }
    }

    &__item {
      padding: 15px 0 15px 20px;
      margin-left: auto;
    }
  }

</style>
