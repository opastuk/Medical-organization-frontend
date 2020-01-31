<template>
<div class="about">
  <page-layout class="about__layout">
    <template v-slot:headline>
      <h2 class="headline">О компании</h2>
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

</style>
