<template>
  <header class="page-header">
    <div class="page-header__wrapper">
      <a class="page-header__logo-link">
        <img src="../assets/img/logo.png" alt="Юмед" width="64" height="40">
      </a>
      <span class="page-header__tel">8 (495) 784-06-17</span>
      <button class="page-header__toggle">
        <span class="visually-hidden">Открыть/закрыть меню</span>
      </button>
      <ul class="page-header__list">
        <li class="page-header__item">
          <a class="page-header__link">Главная</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__link">Новости</a>
        </li>
        <li class="page-header__item page-header__item--dropdown">О нас
          <ul class="page-header__list--sub" hidden>
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
          <a class="page-header__link">Наши клиенты</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__link">Каталог</a>
        </li>
        <li class="page-header__item">
          <a class="page-header__link">Контакты</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

    @Component({})
export default class PageHeader extends Vue {

    }
</script>

<style scoped lang="scss">
  .page-header {
    background-color: $blue;
    height: 60px;
    width: 100%;
    padding: 0 15px;
    position: fixed;

    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      height: 100%;
      color: #ffffff;

      @media(min-width: 768px) {
        width: 95%;
      }
    }
    &__logo-link {
      height: 40px;
    }
    &__tel {
      padding: 0 20px;
      white-space: nowrap;
    }
    &__list {
      display: flex;
      flex-direction: row;
      @include reset-list;

      &--sub {
        @include reset-list;
        position: absolute;
      }
    }

    &__item {
      padding: 15px 0 15px 20px;
      white-space: nowrap;
      &--dropdown {
        padding-right: 20px;
      }
      &:first-child {
        padding-left: 0;
      }
    }
    &__link {
      @include reset-link;
      color: #ffffff;
      &:hover,
      &:focus {
        opacity: 0.5;
      }
    }
  }
  @media (min-width: 768px) {
    .page-header {
      &__toggle {
        display: none;
      }
    }
  }

</style>
