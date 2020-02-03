<template>
  <main class="page-main">
    <h1 class="visually-hidden">Umed - продажа медицинского оборудования</h1>
    <section class="main-slider">
      <div v-scroll class="main-page__carousel">
              <el-carousel height="70vh" width="100%" trigger="click">
                <el-carousel-item v-for="item in services" :key="item.id">
                <div class="carousel-overlay">
                  <div class="carousel-cell__description">
                    {{item.name}}
                  </div>
                </div>
                  <video class="carousel-overlay__video" muted="" autoplay="" loop="loop" ref="video" preload >
                    <source v-if="item.video === 'artroscopy'" src="../assets/video/desktop/artroscopy.mp4" type="video/mp4">
                    <source v-if="item.video === 'osteogenesis'" src="../assets/video/desktop/osteogenesis.mp4" type="video/mp4">
                    <source v-if="item.video === 'protez'" src="../assets/video/desktop/protez.mp4" type="video/mp4">
                  </video>
                </el-carousel-item>
              </el-carousel>
            </div>
    </section>
    <section v-scroll class="main-annotation">
      <div class="container main-annotation__container">
        <picture>
          <source media="(min-width: 768px)" srcset="../assets/img/about.png">
          <img class="main-annotation__img" src="../assets/img/about-min.png" alt="О нас">
        </picture>
        <div class="main-annotation__wrapper">
          <h2 class="main-annotation__headline">О нас</h2>
          <p class="main-annotation__text">
            ГК ЮМед – ведущий поставщик медицинского оборудования и расходных материалов с 2012 года. <br>
            Основная деятельность - это обеспечение клиник, от муниципальных больниц до крупнейших научно-исследовательских центров,
            медицинскими изделиями в области травматологии, ортопедии и спортивной медицины.
          </p>
        </div>
      </div>
    </section>
    <div v-scroll class="container">
      <section class="main-map">
        <img class="map" src="../assets/img/map.png" alt="Карта филиалов">
      </section>
    </div>
    <section v-scroll class="main-statistic">
      <div class="container">
        <h2 class="main-statistic__headline">Ключевые показатели</h2>
        <ul class="main-statistic__list">
          <li class="main-statistic__item">
            <b class="main-statistic__value">15</b>
            <span class="main-statistic__text">филиалов</span>
          </li>
          <li class="main-statistic__item">
            <b class="main-statistic__value">9</b>
            <span class="main-statistic__text">лет на рынке</span>
          </li>
          <li class="main-statistic__item">
            <b class="main-statistic__value">60</b>
            <span class="main-statistic__text">партнеров</span>
          </li>
        </ul>
      </div>
    </section>
    <section v-scroll class="main-partners">
      <div class="container">
        <h2 class="main-partners__headline">Наши партнеры</h2>
        <ul class="main-partners__list">
          <li class="main-partners__item" v-for="partner in partners" :key="partner.id">
            <a class="main-partners__link" :href="partner.link" target="_blank"><img class="main-partners__img" :src="require(`../assets/img/${partner.name}.png`)" :alt="partner.name"></a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PageHeader from '../components/PageHeader.vue';
import Map from '../components/Map.vue';

@Component({
  components: {
    'page-header': PageHeader,
    Map,
  },
})
export default class HomePage extends Vue {
  partners = [];

  services = [];

  get width() {
    return window.innerWidth > 768;
  }

  videoPath() {
    if (this.width) {
      return 'desktop';
    }
    return 'mobile';
  }

  mounted() {
    this.partners = this.$store.state.partners;
    this.services = this.$store.state.services;
  }
}
</script>

<style scoped lang="scss">
.main-page {
  &__carousel {
    height: 100%;
    width: 100%;
  }
}

.main {
  &-slider {
    position: relative;
    display: flex;
    margin-bottom: 30px;

    @media (min-width: 769px) {
      margin-bottom: 75px;
    }
  }

  &-annotation {
    padding: 50px 0 80px;
    margin-bottom: 55px;

    &__container {
      @media (min-width: 1200px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }

    &__img {
      display: block;
      margin: 0 auto 35px;

      @media (min-width: 1200px) {
        margin-bottom: 0;
      }
    }

    &__wrapper {
      @media (min-width: 1200px) {
        width: 500px;
      }
    }

    &__headline {
      font-size: 35px;
      line-height: 45px;
      text-align: center;
      margin: 0 0 30px;

      @media (min-width: 1200px) {
        text-align: left;
      }
    }

    &__text {
      margin: 0;
      font-size: 16px;
      line-height: 24px;
      text-align: center;

      @media (min-width: 1200px) {
        line-height: 26px;
        text-align: left;
      }
    }
  }
  &-map {
    @media(min-width: 768px) {
      position: relative;
    }
  }
  &-statistic {
    width: 100%;
    padding: 50px 0;
    background-color: #eeeeee;
    color: #0c2230;
    margin-bottom: 75px;
    &__headline {
      font-size: 35px;
      line-height: 45px;
      text-align: center;
      margin: 0 0 55px;
    }
    &__list {
      @include reset-list;
      display: block;

      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__item {
      text-align: center;
      margin-bottom: 35px;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    &__value {
      display: block;
      font-size: 70px;
      line-height: 50px;
      margin-bottom: 35px;
      color: $blue;
      &:hover{
        color: #ee7202;
        transition: 0.5s;
      }
    }
  }

  &-partners {
    margin-bottom: 65px;
    &__headline {
      font-size: 35px;
      line-height: 45px;
      text-align: center;
      margin: 0 0 80px;
    }

    &__list {
      @include reset-list;
      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }
    }
    &__item {
      margin-bottom: 35px;
      -webkit-filter: grayscale(99%);
      filter: grayscale(99%);

      @media (min-width: 1200px) {
        &:first-child {
          padding-left: 0;
        }
      }

      &:hover {
        transition: -webkit-filter 0.7s ease-in-out;
        transition: filter 0.7s ease-in-out, -webkit-filter 0.7s ease-in-out;
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
      }
    }
    &__img {
      display: block;
      margin: 0 auto;
      @media (min-width: 768px) {
        margin: 0;
        display: inherit;
      }
    }
  }
}

.map{
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin: 0 auto 80px;
    position: relative;
    max-width: 100%;
  }
}
.container {
  width: 290px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 690px
  }
  @media (min-width: 1200px) {
    width: 1100px;
  }
}

.carousel {
  &-overlay {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgba(0, 114, 212, 0.2);
    height: 100%;
    width: 100%;
  }
  &-overlay__video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  &-cell__description {
    background-color: rgba(12, 34, 48, 0.4);
    font-weight: bold;
    font-size: 30px;
    padding: 20px;
    margin: 0 auto;
    width: fit-content;
    text-transform: uppercase;
    color: #ffffff;
    @media (min-width: 769px) {
      font-size: 40px;
      padding: 30px;
    }
    @media(min-width: 1200px) {
      margin-left: 125px;
    }
  }
}
.before-enter{
  opacity: 0;
  transition: all 1.5s ease-in-out;
}
.enter{
  opacity: 1;
  transition: all 1.5s ease-in-out;
}
</style>
