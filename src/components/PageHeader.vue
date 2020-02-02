<template>
  <header class="page-header" :class="{'fixed': isMainPage && noScroll}">
    <div class="page-header__wrapper" :class="{'mobile' : noScroll && !isDesktop && isMainPage}">
      <div class="page-header__mobile-wrapper">
        <a class="page-header__logo-link">
          <img src="../assets/img/logo.png" alt="Юмед" width="64" height="40">
        </a>
        <span class="page-header__tel" :class="{'fixed__text' : noScroll && isDesktop && isMainPage}">8 (495) 784-06-17</span>
        <button class="page-header__toggle" @click="openMenu" :class="{'opened' : menuOpened && isMainPage, 'closed_notscrolled': noScroll && !menuOpened && isMainPage, opened_notscrolled: noScroll && menuOpened && isMainPage}">
          <span class="visually-hidden">Открыть/закрыть меню</span>
        </button>
      </div>
      <ul class="page-header__list" v-if="menuOpened || isDesktop" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage, 'mobile': noScroll && !isDesktop && isMainPage}">
        <li class="page-header__item">
          <router-link class="page-header__link" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/">Главная</router-link>
        </li>
        <li class="page-header__item">
          <router-link class="page-header__link" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/news">Новости</router-link>
        </li>
        <li class="page-header__item page-header__item--dropdown">
          <a class="page-header__link page-header__link--dropdown" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage, 'no-scroll': noScroll && isMainPage}" @click="subMenu()">О нас</a>
          <ul class="page-header__list--sub" v-if="subMenuOpened">
            <li class="page-header__item--sub">
              <router-link class="page-header__link--sub" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/about">О компании</router-link>
            </li>
            <li class="page-header__item--sub">
              <router-link class="page-header__link--sub" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/career">Карьера</router-link>
            </li>
            <li class="page-header__item--sub">
              <router-link class="page-header__link--sub" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/memo">Пациентам</router-link>
            </li>
            <li class="page-header__item--sub">
              <router-link class="page-header__link--sub" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/props">Реквизиты</router-link>
            </li>
            <li class="page-header__item--sub">
              <router-link
                class="page-header__link--sub" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/presentations">Презентации
              </router-link>
            </li>
          </ul>
        </li>
        <li class="page-header__item">
          <router-link class="page-header__link" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/clients">Наши клиенты</router-link>
        </li>
        <li class="page-header__item">
          <router-link class="page-header__link" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/catalog">Каталог</router-link>
        </li>
        <li class="page-header__item">
          <router-link class="page-header__link" :class="{'mobile__text' : menuOpened && noScroll && isMainPage, 'fixed__text' : noScroll && isDesktop && isMainPage}" to="/contacts">Контакты</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component({
      computed: {
        isDesktop: {
          get() {
            return window.innerWidth > 768;
          },
        },
      },
    })
export default class PageHeader extends Vue {
      @Prop(Boolean)isMainPage;

      menuOpened = false;

      subMenuOpened = false;

      noScroll = true;

      openMenu() {
        this.menuOpened = !this.menuOpened;
      }

      subMenu() {
        this.subMenuOpened = !this.subMenuOpened;
      }

      created() {
        window.addEventListener('scroll', () => {
          this.noScroll = window.scrollY === 0;
        });
      }
    }
</script>

<style scoped lang="scss">

  .page-header {
    background-color: $blue;
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 5;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    &__wrapper {
      margin: 0 auto;
      height: 100%;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media(min-width: 768px) {
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      @media (min-width: 800px) {
        width: 90%;
      }
      @media (min-width: 900px) {
        width: 85%;
      }
    }
    &__mobile-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
      @media (min-width: 768px) {
        justify-content: flex-start;
     }
    }
    &__logo-link {
      height: 40px;
    }
    &__toggle {
      background-color: transparent;
      border: none;
      width: 30px;
      height: 30px;
      background-image: url("../assets/svg/menu.svg");
      background-position: center;
      outline: none;
      @media (min-width: 768px) {
        display: none;
      }
    }
    &__tel {
      padding: 0 20px;
      white-space: nowrap;
      @media (min-width: 768px) {
        margin-left: 25px;
      }
    }
    &__list {
      @include reset-list;
      width: 100%;
      background-color: $blue;
      @media (min-width: 768px) {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        width: auto;
      }
      @media (max-width: 768px) {
        position: absolute;
        top: 60px;
      }

      &--sub {
        @include reset-list;
        display: none;
        color: #ffffff;
        margin-top: 10px;
        @media (min-width: 768px) {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 58px;
          width: 170px;
          text-align: center;
          background-color: #f4f4f4;
          color: $blue;
          margin-top: 0;
        }
      }
    }
    &__item--dropdown:hover &__list--sub {
      display: block;
    }
    &__item {
      padding: 15px 0 15px 15px;
      white-space: nowrap;
      @media (min-width: 768px) {
        padding: 20px 0 20px 20px;
        &:first-child {
          padding-left: 0;
        }
      }
      &--dropdown {
        position: relative;
      }
      &--sub {
        padding: 10px;
        border: none;
        &:hover,
        &:focus {
          opacity: 0.5;
        }
        &:last-child{
          padding-bottom: 0;
        }
        @media (min-width: 768px){
          border-bottom: 1px solid #a8d9f5;
          &:last-child {
            padding-bottom: 10px;
          }
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
      &--sub {
        @include reset-link;
        color: #ffffff;
        @media (min-width: 768px) {
          color: $blue;
        }
      }
      &--dropdown {
        padding-right: 20px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 3px;
          right: -2px;
          width: 15px;
          height: 15px;
          background-image: url("../assets/svg/down-arrow.svg");
          @media (min-width: 768px) {
            background-image: url("../assets/svg/down-arrow.svg");
          }
        }
      }
    }
  }

  .fixed {
    width: 100%;
    height: 60px;
    top: 0;
    background-color: rgba(black, 0.1);
    z-index: 5;
    box-shadow: none;

    &__text {
      color: $blue;
    }
  }

  .mobile {
    background-color: rgba(black, 0.1);
    color: $blue;

    &__text {
      color: $blue;
    }
  }

  .opened {
    border: none;
    width: 30px;
    height: 30px;
    background: transparent url("../assets/svg/cross-white.svg") no-repeat center;
    outline: none;
    @media (min-width: 768px) {
      display: none;
    }

    &_notscrolled {
      border: none;
      width: 30px;
      height: 30px;
      background: transparent url("../assets/svg/cross.svg") no-repeat center;
      outline: none;
      @media (min-width: 768px) {
        display: none;
      }
    }

  }

  .closed_notscrolled {
    border: none;
    width: 30px;
    height: 30px;
    background: transparent url("../assets/svg/menu-blue.svg") no-repeat center;
    outline: none;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .no-scroll{
    &::after {
      content: "";
      position: absolute;
      top: 3px;
      right: -2px;
      width: 15px;
      height: 15px;
      background-image: url("../assets/svg/down-arrow-blue.svg");
      @media (min-width: 768px) {
        background-image: url("../assets/svg/down-arrow-blue.svg");
      }
    }
  }

</style>
