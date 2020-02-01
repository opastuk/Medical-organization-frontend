<template>
	<div class="memo">
		<page-layout class="page-layout">
			<template v-slot:headline>
				<h2 class="headline">Пациентам</h2>
			</template>
			<template v-slot:content>
				<div class="memo__wrapper">
					<a class="memo__link" href="#">
						<img class="memo__img" src="../assets/img/kneememo.png"
						alt="Жизнь с новым коленным суставом">
					</a>
					<a class="memo__link" href="#">
						<img class="memo__img" src="../assets/img/hipmemo.png"
						alt="Жизнь с новым тазобедренным суставом">
					</a>
				</div>
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
export default class Memo extends Vue {
}
</script>

<style scoped lang="scss">
	.headline {
		@include reset-text;
		font-size: 35px;
		position: relative;
		z-index: 1;
	}
	.memo {
		&__wrapper {
			display: block;
			@media (min-width:768px){
				display: flex;
				justify-content: space-around;
			}
		}
		&__link {
			display: block;
			width: 250px;
			margin: 0 auto;
			@media (min-width: 768px) {
				display: inherit;
				margin: 0;
			}
		}
	}
</style>
