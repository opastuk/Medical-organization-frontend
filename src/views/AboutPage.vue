<template>
<div class="about">
  <page-layout class="about__layout">
    <template v-slot:headline>
      <h2 class="headline">О компании</h2>
    </template>
    <template v-slot:content>
      <div class="about-main__wrapper">
        <h2 class="about__subtitle">О нас</h2>
        <p class="about__text">
          ГК ЮМед – ведущий поставщик медицинского оборудования и расходных материалов с 2012 года.
          Наша миссия – партнерство профессионалов во благо здоровья.
          Основная деятельность – это обеспечение клиник, от муниципальных больниц до
          крупнейших научно-исследовательских центров, медицинскими изделиями в области
          травматологии, ортопедии и спортивной медицины.
          Принципы работы ГК ЮМед – это открытое и
          честное сотрудничество с партнерами и заказчиками.
          ГК ЮМед имеет 13 филиалов и более 40 медицинских
          представителей в западной части Российской
          Федерации с населением более 100 млн. человек.
        </p>
        <h2 class="about__subtitle">Наша команда</h2>
        <p class="about__text">
          ГК ЮМед  - это команда единомышленников и профессионалов, которая гарантирует:
          - своевременную поставку оборудования и расходных материалов;
          - качественный сервис до, во время и после поставки.
        </p>
      </div>
    </template>
  </page-layout>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PageLayout from '../components/PageComponent.vue';

@Component({
  components: { PageLayout },
})
export default class About extends Vue {
}
</script>

<style scoped lang="scss">
  .headline {
    @include reset-text;
    font-size: 35px;
    position: relative;
    z-index: 1;
  }
  .about__text {
    padding: 0 10px;
    margin: 0 0 70px;
  }
  .about__subtitle {
    margin: 0 0 40px;
  }
</style>
