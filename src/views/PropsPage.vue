<template>
	<div class="props__layout">
		<page-layout class="page-layout">
			<template v-slot:headline>
				<h2 class="headline">Реквизиты</h2>
			</template>
			<template v-slot:content>
				<div class="props">
					<h2 class="props__heading">Реквизиты компании</h2>
					<table class="props__table">
						<tbody><tr class="props__row">
							<td class="props__d"><b>Полное наименование</b></td>
							<td class="props__d">Общество с ограниченной ответственностью «ЮМед»</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Краткое наименование</b></td>
							<td class="props__d">ООО «ЮМед»</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Юридический адрес</b></td>
							<td class="props__d">125315, г. Москва, Ленинградский проспект,
								д. 80, корпус Г, пом. XII, ком.8Г</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Идентификационный налоговый номер (ИНН)</b></td>
							<td class="props__d">7743182794</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Код причины постановки</b></td>
							<td class="props__d">774301001</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Основной государственный регистрационный номер
								(ОГРН), дата выдачи</b></td>
							<td class="props__d">5167746355046 от 22 ноября 2016 года</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Расчетный счет</b></td>
							<td class="props__d">40702810800040560853</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Корреспондентский счет</b></td>
							<td class="props__d">30101810445250000360</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>БИК</b></td>
							<td class="props__d">044525360</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Полное наименование банка</b></td>
							<td class="props__d">Филиал «Корпоративный» ПАО «Совкомбанк»</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>ОКПО</b></td>
							<td class="props__d">05662540</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>ОКВЭД</b></td>
							<td class="props__d">46.46.2</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>ОКАТО</b></td>
							<td class="props__d">45277589000</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>ОКТМО</b></td>
							<td class="props__d">45345000000</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>ОКОГУ</b></td>
							<td class="props__d">4210014</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>ОКФС</b></td>
							<td class="props__d">16</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>ОКОПФ</b></td>
							<td class="props__d">12300</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Генеральный директор</b></td>
							<td class="props__d">Турдыбеков Сарварбек Камалбекович</td>
						</tr>
						<tr class="props__row">
							<td class="props__d"><b>Основание полномочий</b></td>
							<td class="props__d">Устав</td>
						</tr>
						</tbody></table>
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
	.props {
		width: 340px;
		margin: 0 auto;
		@media (min-width: 768px) {
			width: 100%;
		}
		&__heading {
			box-sizing: border-box;
			width: 100%;
			margin: 0;
			padding: 15px;
			background-color: #1B98E0;
			font-size: 16px;
			color: #ffffff;
			text-align: center;
		}
		&__table {
			border: 1px solid #eeeeee;
			border-collapse: collapse;
		}
		&__d {
			border: 1px solid #e0e0e0;
			padding: 5px;
			@media (min-width: 768px) {
					padding: 10px;
			}
		}
		&__table tr:nth-of-type(odd) {
			background-color: #eeeeee;
		}
	}
</style>
