<template>
  <div id="app">
    <router-view/>
    <page-footer></page-footer>
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
