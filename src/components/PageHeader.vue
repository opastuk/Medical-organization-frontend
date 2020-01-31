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
        <li class="page-header__item page-header__item--dropdown">
          <a class="page-header__link">О нас</a>
          <ul class="page-header__list--sub">
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">О компании</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">Карьера</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">Пациентам</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">Реквизиты</a>
            </li>
            <li class="page-header__item--sub">
              <a class="page-header__link--sub">Презентации</a>
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
      @media (min-width: 800px) {
        width: 90%;
      }
      @media (min-width: 900px) {
        width: 85%;
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
        left: 50%;
        transform: translateX(-50%);
        top: 57px;
        width: 170px;
        background-color: #f4f4f4;
        color: $blue;
        text-align: center;
        display: none;
      }
    }
    &__item--dropdown:hover &__list--sub {
      display: block;
    }
    &__item {
      padding: 20px 0 20px 20px;
      white-space: nowrap;
      &--dropdown {
        padding-right: 20px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 22px;
          right: -2px;
          width: 15px;
          height: 15px;
          background-image: url("../assets/svg/down-arrow.svg");
        }
      }
      &:first-child {
        padding-left: 0;
      }
      &--sub {
        padding: 10px;
        border-bottom: 1px solid #a8d9f5;
        &:hover,
        &:focus {
          opacity: 0.5;
        }
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
