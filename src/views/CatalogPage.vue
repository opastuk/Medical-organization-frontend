<template>
<div class="catalog">
	<div class="catalog__headline">
		<div class="catalog__overlay"/>
		<h2 class="catalog__heading">Каталог</h2>
	</div>
	<div class="catalog__wrapper">
		<h3 class="catalog__text">Раздел находится в разработке</h3>
	</div>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
})
export default class Catalog extends Vue {
}
</script>

<style scoped lang="scss">
.catalog {
	&__headline {
		margin: 0 0 75px;
		padding: 85px 0;
		background-color: #e7e7e7;
		background-image: url("../assets/img/catalog.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		text-align: center;
		color: #ffffff;
		text-transform: uppercase;
		position: relative;
	}
	&__overlay {
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(60, 60, 60, 0.5);
		}
	}
	&__heading {
		@include reset-text;
		font-size: 35px;
		position: relative;
		z-index: 1;
	}

	&__wrapper {
		width: 80%;
		margin: 0 auto;
		@media (min-width: 768px) {
			width: 690px;
		}
		@media (min-width: 1200px) {
			width: 1100px;
		}
	}
}
</style>
