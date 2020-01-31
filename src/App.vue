<template>
  <div id="app" class="page-container">
    <page-header class="page-header"/>
    <router-view/>
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
<style lang="scss"></style>
