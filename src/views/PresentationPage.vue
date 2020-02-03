<template>
	<div class="presentation">
		<page-layout class="page-layout">
			<template v-slot:headline>
				<h2 class="presentation__headline">Презентации</h2>
			</template>
			<template v-slot:content>
				<a class="presentation__link" :href="require('../assets/docs/presentation.pptx')"
				target="_blank" download="Корпоративная презентация.pptx">
					<figure class="presentation__img-wrapper">
						<img class="presentation__img" src="../assets/img/presentation.png" alt="Презентация">
						<figcaption class="presentation__text">Презентация</figcaption>
					</figure>
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
	.presentation{
		&__headline {
			@include reset-text;
			font-size: 35px;
			position: relative;
			z-index: 1;
		}
		&__link {
			@include reset-link;
			color: #000000;
			text-align: center;
		}
		&__img-wrapper {
			margin: 0 auto;
			width: 320px;
			@media (min-width: 1200px) {
				margin: 0;
			}
		}
	}
</style>
