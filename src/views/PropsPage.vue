<template>
	<div class="props">
		<page-layout class="page-layout">
			<template v-slot:headline>
				<h2 class="headline">Реквизиты</h2>
			</template>
			<template v-slot:content>
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
export default class Props extends Vue {
}
</script>

<style scoped lang="scss">
	.headline {
		@include reset-text;
		font-size: 35px;
		position: relative;
		z-index: 1;
	}
</style>
