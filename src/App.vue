<template>
  <div id="app" class="page-container">
    <page-header class="page-header"/>
    <div class="container__main">
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

}
</script>
<style lang="scss">
  body{
    position: relative;
  }
  .page-container {
    height: 100%;
    min-width: 320px;
  }
  .container__main {
    padding-top: 60px;
    padding-bottom: 161px;
  }
  .page-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 161px;
    margin-top: -161px;
  }
</style>
