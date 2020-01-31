<template>
<div class="page-container">
  <div class="page-header">
    <slot name="header"></slot>
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
export default class Page extends Vue {

  }
</script>

<style scoped lang="scss">
  .sidebar {
    width: 100%;
    margin-bottom: 50px;
    box-sizing: border-box;
    &__link {
      display: block;
      padding: 15px;
      text-decoration: none;
      color: #0c2230;
    }
    &__link:hover,
    &__link:focus {
      background-color: #1B98E0;
      color: #ffffff;
    }
    &__list {
      @include reset-list;
    }
    &__item {
      margin-bottom: 1px;
      background-color: rgba(0, 141, 204, 0.1);
    }
    &__link--current {
      color: #ffffff;
    }
    &__item--current {
      background-color: #1B98E0;
    }
  }
  @media (min-width: 1200px) {
    .sidebar {
      width: 260px;
    }
  }
</style>
