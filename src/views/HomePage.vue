<template>
<div>
  <page-header/>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import PageHeader from '../components/PageHeader.vue';

@Component({
  components: {
    'page-header': PageHeader,
  },
})
export default class HomePage extends Vue {

}
</script>

<style scoped lang="scss">
</style>
