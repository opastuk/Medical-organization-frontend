<template>
<div class="page-container">
  <div class="page-header">
    <slot name="header"></slot>
  </div>
  <div class="page-content">
    <div class="page-content__main-navigation">
      <ul class="main-navigation__list">
        <li class="main-navigation__item"><a class="main-navigation__link" href="index-asset.html">Главная</a></li>
        <li class="main-navigation__item"><a class="main-navigation__link" href="news-asset.html">Новости</a></li>
        <li class="main-navigation__item"><a class="main-navigation__link main-navigation__link--dropdown" href="about-asset.html">О нас</a>
          <ul class="main-navigation__list main-navigation__list--sub main-navigation__list--hidden">
            <li class="main-navigation__item main-navigation__item--sub"><a class="main-navigation__link main-navigation__link--sub" href="about-asset.html">О компании</a></li>
            <li class="main-navigation__item main-navigation__item--sub"><a class="main-navigation__link main-navigation__link--sub">Карьера</a></li>
            <li class="main-navigation__item main-navigation__item--sub"><a class="main-navigation__link main-navigation__link--sub" href="clients-asset.html">Пациентам</a></li>
            <li class="main-navigation__item main-navigation__item--sub"><a class="main-navigation__link main-navigation__link--sub" href="props-asset.html"> Реквизиты</a></li>
            <li class="main-navigation__item main-navigation__item--sub"><a class="main-navigation__link main-navigation__link--sub" href="presentations-asset.html">Презентации</a></li>
          </ul>
        </li>
        <li class="main-navigation__item"><a class="main-navigation__link" href="partners-asset.html">Наши партнеры</a></li>
        <li class="main-navigation__item"><a class="main-navigation__link" href="catalog-asset.html">Каталог</a></li>
        <li class="main-navigation__item"><a class="main-navigation__link" href="contacts-asset.html">Контакты</a></li>
      </ul>
    </div>
    <div class="page-content__nested-content">
      <slot name="content"></slot>
    </div>
  </div>
</div>
</template>

<script>
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class Page extends Vue {

  }
</script>

<style scoped lang="scss">
  .page-container {
    display: flex;
    flex-direction: column;
  }

  .page-content {
    display: flex;
    flex-direction: row;
  }
</style>
