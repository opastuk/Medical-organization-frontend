<template>
  <div id="app" class="page-container">
    <div class="container__main">
      <page-header class="page-header"/>
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
  .page-container {
    height: 100%;
  }
  .container__main {
    height: calc(100vh - 161px);
    padding-bottom: 161px;
  }
  .page-footer {
    height: 161px;
    margin-top: -161px;
  }
</style>
