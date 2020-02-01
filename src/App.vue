<template>
  <div id="app" class="page-container">
    <page-header class="page-header" :isMainPage="isMainPage"/>
    <div class="container__main" :class="{'container__main-page': isMainPage}">
      <router-view/>
    </div>
      <page-footer class="page-footer"/>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import PageFooter from './components/PageFooter.vue';
import PageHeader from './components/PageHeader.vue';

@Component({
  components: { PageFooter, PageHeader },
})
export default class App extends Vue {
  get isMainPage() {
    return this.$route.path === '/';
  }
}
</script>
<style lang="scss">
  @font-face {
    font-family: "Raleway";
    src: url("./assets/fonts/raleway-regular.ttf") format("truetype");
  }

  body{
    position: relative;
  }
  .page-container {
    font-family: Raleway, sans-serif;
    height: 100%;
    min-width: 320px;
  }
  .container {
    &__main {
      padding-top: 60px;
      padding-bottom: 161px;
    }
    &__main-page{
      padding-top: 0;
    }
  }
  .page-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 161px;
    margin-top: -161px;
  }
</style>
