<template>
<div class="career">
	<page-layout class="page-layout">
		<template v-slot:headline>
			<h2 class="headline">Карьера</h2>
		</template>
		<template v-slot:content>
			<div class="career__wrapper">
				<h3 class="career__subtitle">Актуальные вакансии</h3>
				<ul class="career__list">
					<li class="career__item">
						<span class="career__value job" @click="showVacancy">Медицинский представитель</span>
						<ul class="job__list" v-if="vacancyIsShown">
							<li class="job__item">
								Основные обязанности:
								<ul class="job__sub-list">
									<li class="job__sub-item">Выполнение плана продаж на выделенной территории</li>
									<li class="job__sub-item">Поддержание и развитие клиентской базы</li>
									<li class="job__sub-item">Консультирование врачей по техническим
										характеристикам используемого оборудования и расходных материалов</li>
									<li class="job__sub-item">Ведение отчетности</li>
								</ul>
							</li>
							<li class="job__item">
								Требования:
								<ul class="job__sub-list">
									<li class="job__sub-item">Релевантный опыт работы</li>
									<li class="job__sub-item">Грамотная письменная и устная речь</li>
									<li class="job__sub-item">Знание и понимание ФЗ 44</li>
									<li class="job__sub-item">Готовность к обучению</li>
								</ul>
							</li>
							<li class="job__item">
								Условия:
								<ul class="job__sub-list">
									<li class="job__sub-item">Заработная плата по результатам собеседования
										(оклад + квартальная премия)</li>
									<li class="job__sub-item">Предоставление корпоративной связи</li>
									<li class="job__sub-item">Компенсация использования а/м</li>
									<li class="job__sub-item">Полное соблюдение ТК РФ</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<button class="career__button" type="primary">Откликнуться</button>
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
export default class Career extends Vue {
  vacancyIsShown = false;

  showVacancy() {
    this.vacancyIsShown = !this.vacancyIsShown;
  }
}
</script>

<style scoped lang="scss">
	.headline {
		@include reset-text;
		font-size: 35px;
		position: relative;
		z-index: 1;
	}
	.job {
		display: block;
		margin-bottom: 20px;
		&__list {
			@include reset-list;
		}
		&__sub-list {
			padding: 0 0 0 40px;
			margin: 10px 0;
		}
	}
	.career {
		&__value {
			color: $blue;
			text-decoration: underline;
			cursor: pointer;
			margin: 0 0 30px;
			&:hover,
			&:focus {
				opacity: 0.9;
			}
			&:active {
				opacity: 0.7;
			}
		}
		&__subtitle {
			@include reset-list;
			margin: 0 0 50px;
			font-size: 21px;
		}
		&__list {
			@include reset-list;
			margin: 0 0 50px;
			padding: 0 10px;
		}
		&__button {
			text-transform: uppercase;
			border: none;
			font-weight: bold;
			padding: 10px 40px;
			width: 290px;
			min-height: 55px;
			background-color: $blue;
			color: #ffffff;
			outline: none;
			&:hover,
			&:focus {
				opacity: 0.7;
			}
			&:active {
				opacity: 0.5;
			}
		}
	}
</style>
