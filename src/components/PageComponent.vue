<template>
<div class="page-container">
  <div class="page-headline">
    <div class="page-headline__overlay"/>
    <slot name="headline"></slot>
  </div>
  <div class="page-content">
    <div class="page-content__sidebar" v-if="!noSidebar">
        <ul class="sidebar__list">
          <li class="sidebar__item">
            <router-link class="sidebar__link" to="/about">О компании</router-link>
          </li>
          <li class="sidebar__item">
            <router-link class="sidebar__link" to="/career">Карьера</router-link>
          </li>
          <li class="sidebar__item">
            <router-link class="sidebar__link" to="/memo">Пациентам</router-link>
          </li>
          <li class="sidebar__item">
            <router-link class="sidebar__link" to="/props">Ревизиты</router-link>
          </li>
          <li class="sidebar__item">
            <router-link class="sidebar__link" to="/presentations">Презентации</router-link>
          </li>
        </ul>
    </div>
    <div class="page-content__nested-content" :class="{'full': noSidebar}">
      <slot name="content"></slot>
    </div>
  </div>
</div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
export default class PageLayout extends Vue {
      @Prop(Boolean) noSidebar
  }
</script>

<style scoped lang="scss">
  body{
    height: 100%;
    position: relative;
  }

  .sidebar {
    &__link {
      display: block;
      padding: 15px;
      text-decoration: none;
      color: #0c2230;
      &:hover,
      &:focus {
        background-color: #1B98E0;
        color: #ffffff;
      }
    }
    &__list {
      @include reset-list;
    }
    &__item {
      margin-bottom: 1px;
      background-color: rgba(0, 141, 204, 0.1);
    }
  }
  .page-headline {
    margin: 0 0 75px;
    padding: 85px 0;
    background-color: #c7c7c7;
    background-image: url("../assets/img/about.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    position: relative;
    &__overlay {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(60, 60, 60, 0.5);
      }
    }
  }
  .page-content {
    width: 75%;
    margin: 0 auto 50px;
    @media (min-width: 1200px) {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      width: 1100px;
    }

    &__sidebar {
      width: 100%;
      margin-bottom: 50px;
      box-sizing: border-box;
      @media (min-width: 1200px) {
        width: 260px;
        margin-right: 50px;
      }
    }
    &__nested-content {
      @media (min-width: 1200px) {
        width: 750px;
      }
    }
  }

  .full {
    width: 290px;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 690px;
    }

    @media (min-width: 1200px) {
      width: 1100px;
    }
  }
</style>
