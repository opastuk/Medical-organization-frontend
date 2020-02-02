<template>
	<div class="contacts">
		<div class="contacts__headline">
			<div class="contacts__overlay"/>
			<h2 class="contacts__heading">Контакты</h2>
		</div>
		<div class="contacts__wrapper">
			<div class="contacts__map-wrapper">
				<img class="contacts__map" src="../assets/img/map.png" alt="Карта">
			</div>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
@Component({
})
export default class Contacts extends Vue {
}
</script>

<style scoped lang="scss">
.contacts {
	&__headline {
		margin: 0 0 75px;
		padding: 85px 0;
		background-color: #e7e7e7;
		background-image: url("../assets/img/contacts.jpeg");
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
			background-color: rgba(60, 60, 60, 0.7);
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
	&__map {
		display: block;
		margin: 0 auto;
		position: relative;
	}
}
</style>
