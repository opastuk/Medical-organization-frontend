<template>
	<div class="map">
		<div class="map__wrapper">
			<img class="map__img" src="../assets/img/map.png" alt="Карта">
			<router-link class="map__link" target="_blank" to="/contacts/0" id="Moscow"/>
			<router-link class="map__link" target="_blank" to="/contacts/1" id="Spb"/>
			<router-link class="map__link" target="_blank" to="/contacts/2" id="Krasnodar"/>
			<router-link class="map__link" target="_blank" to="/contacts/3" id="Saratov"/>
			<router-link class="map__link" target="_blank" to="/contacts/4" id="Yaroslavl"/>
			<router-link class="map__link" target="_blank" to="/contacts/5" id="Archangelsk"/>
			<router-link class="map__link" target="_blank" to="/contacts/6" id="Ekb"/>
			<router-link class="map__link" target="_blank" to="/contacts/7" id="Chelyabinsk"/>
			<router-link class="map__link" target="_blank" to="/contacts/8" id="Kazan"/>
			<router-link class="map__link" target="_blank" to="/contacts/9" id="Rostov"/>
			<router-link class="map__link" target="_blank" to="/contacts/10" id="Pyatigorsk"/>
			<router-link class="map__link" target="_blank" to="/contacts/11" id="Sochi"/>
			<router-link class="map__link" target="_blank" to="/contacts/12" id="Vologda"/>
			<router-link class="map__link" target="_blank" to="/contacts/13" id="Nizhniy"/>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class CustomMap extends Vue {
}
</script>

<style scoped lang="scss">
	.map {
		display: none;
		@media (min-width: 768px) {
			display: block;
			&__wrapper {
				position: relative;
			}
			&__img {
				display: block;
				margin: 0 auto 40px;
				width: 714px;
				height: auto;
			}
			&__link {
				display: block;
				position: absolute;
				width: 30px;
				height: 45px;
				background-image: url("../assets/svg/pin.svg");
				cursor: pointer;
				&:hover,
				&:focus {
					transform: scale(1.2);
				}
			}
			#Moscow {
				top: 208px;
				left: 206px;
			}
			#Spb {
				top: 98px;
				left: 218px;
			}
			#Krasnodar {
				bottom: 148px;
				left: 77px;
			}
			#Saratov {
				bottom: 174px;
				left: 243px;
			}
			#Yaroslavl {
				top: 181px;
				left: 247px;
			}
			#Archangelsk {
				top: 112px;
				left: 331px;
			}
			#Ekb {
				bottom: 246px;
				right: 210px;
			}
			#Chelyabinsk {
				bottom: 162px;
				right: 249px;
			}
			#Kazan {
				bottom: 220px;
				left: 305px;
			}
			#Rostov {
				bottom: 163px;
				left: 123px;
			}
			#Pyatigorsk {
				bottom: 95px;
				left: 127px;
			}
			#Sochi {
				bottom: 97px;
				left: 90px;
			}
			#Vologda {
				top: 167px;
				left: 270px;
			}
			#Nizhniy {
				bottom: 263px;
				left: 260px;
			}
		}
		@media (min-width: 1200px) {
			#Moscow {
				top: 205px;
				left: 399px;
			}
			#Spb {
				top: 98px;
				left: 410px;
			}
			#Krasnodar {
				bottom: 148px;
				left: 270px;
			}
			#Saratov {
				bottom: 173px;
				left: 436px;
			}
			#Yaroslavl {
				top: 181px;
				left: 440px;
			}
			#Archangelsk {
				top: 111px;
				left: 524px;
			}
			#Ekb {
				bottom: 246px;
				right: 427px;
			}
			#Chelyabinsk {
				bottom: 162px;
				right: 466px;
			}
			#Kazan {
				bottom: 220px;
				left: 498px;
			}
			#Rostov {
				bottom: 163px;
				left: 316px;
			}
			#Pyatigorsk {
				bottom: 95px;
				left: 320px;
			}
			#Sochi {
				bottom: 97px;
				left: 283px;
			}
			#Vologda {
				top: 167px;
				left: 463px;
			}
			#Nizhniy {
				bottom: 263px;
				left: 453px;
			}
		}
	}
</style>
