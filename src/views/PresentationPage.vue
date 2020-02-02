<template>
	<div class="presentations">
		<page-layout class="page-layout">
			<template v-slot:headline>
				<h2 class="headline">Презентации</h2>
			</template>
			<template v-slot:content>
				<a class="presentations__link" :href="require('../assets/docs/presentation.pptx')"
				target="_blank" download="Корпоративная презентация.pptx">
					<img class="presentation__img" src="../assets/img/presentation.png" alt="Презентация">
				</a>
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
export default class Presentations extends Vue {
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
