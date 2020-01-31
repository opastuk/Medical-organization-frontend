<template>
  <div id="app" class="page-container">
    <router-view/>
    <page-footer class="page-footer"></page-footer>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import PageFooter from './components/PageFooter.vue';

@Component({
  components: { PageFooter },
})
export default class App extends Vue {

}
</script>
<style lang="scss"></style>
