<template>
<div class="page-container">
  <div class="page-headline">
    <slot name="headline"></slot>
  </div>
  <div class="page-content">
    <div class="page-content__sidebar">
        <ul class="sidebar__list">
          <li class="sidebar__item">
            <a class="sidebar__link">О компании</a>
          </li>
          <li class="sidebar__item">
            <a class="sidebar__link">Карьера</a>
          </li>
          <li class="sidebar__item">
            <a class="sidebar__link">Пациентам</a>
          </li>
          <li class="sidebar__item">
            <a class="sidebar__link">Ревизиты</a>
          </li>
          <li class="sidebar__item">
            <a class="sidebar__link">Презентации</a>
          </li>
        </ul>
    </div>
    <div class="page-content__nested-content">
      <slot name="content"></slot>
    </div>
  </div>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

  @Component
export default class PageLayout extends Vue {

  }
</script>

<style scoped lang="scss">
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
    margin: 0 0 50px;
    padding: 85px 0;
    font-size: 35px;
    background-color: #e7e7e7;
    text-align: center;
  }
  .page-content {
    width: 85%;
    margin: 0 auto 50px;
    @media (min-width: 1200px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__sidebar {
      width: 100%;
      margin-bottom: 50px;
      box-sizing: border-box;
      @media (min-width: 1200px) {
        width: 260px;
      }
    }
  }
</style>
