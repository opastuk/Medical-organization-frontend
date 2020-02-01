<template>
  <page-layout class="news" :noSidebar="true">
    <template v-slot:headline>
      <h2 class="news__headline">Новости</h2>
    </template>
    <template v-slot:content>
        <ul class="news__list">
          <li class="news__list__item" v-for="item in news" :key="item.id">
            <a class="news__link" href="#">
              <img class="news__img"
              :src="require(`../assets/img/${item.id}.jpg`)" alt="Санкт-Петербург">
              <h2 class="news__title">{{ item.title }}</h2>
              <time class="news__time" :datetime="item.dateTime">{{item.date}}</time>
              <p class="news__subtitle">
                {{item.text}}
              </p>
            </a>
          </li>
        </ul>
    </template>
  </page-layout>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import PageLayout from '../components/PageComponent.vue';

@Component({
  components: {
    'page-layout': PageLayout,
  },
})
export default class News extends Vue {
  news = [];

  mounted() {
    this.news = this.$store.state.news;
  }
}
</script>

<style scoped lang="scss">
  .news {

    &__list {
      @include reset-list;
      margin-bottom: 50px;
      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        padding: 0 65px;
      }

      @media (min-width: 1200px) {
        padding: 0;
        width: 1100px;
      }

      &__item {
        width: 230px;
        min-height: 350px;
        overflow: hidden;
        margin: 0 auto 30px;
        padding: 0 0 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

        @media (min-width: 768px) {
          margin: 0 100px 30px 0;
          &:nth-child(2n) {
            margin-right: 0;
          }
        }

        @media (min-width: 1200px) {
          margin-right: 60px;
          &:nth-child(2n) {
            margin-right: 60px;
          }
        }
      }
    }

    &__img {
      width: 100%;
      height: 175px;
      margin-bottom: 15px;
    }

    &__title {
      font-size: 20px;
      text-align: center;
      margin: 0 0 20px;
      padding: 0 20px;
    }

    &__time {
      font-size: 10px;
      line-height: 10px;
      text-align: right;
      display: inline-block;
      position: relative;
      width: auto;
      padding: 5px 8px;
      margin-bottom: 15px;
      margin-left: 20px;
      background-color: #e7e7e7;
      color: #6e6e6e;
      border-radius: 20px;
    }

    &__subtitle {
      height: 50px;
      padding: 0 20px;
      margin: 0;
      font-size: 12px;
      line-height: 16px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    &__link {
      font: inherit;
      color: #0c2230;
      text-decoration: none;
      display: block;
    }
  }

</style>
