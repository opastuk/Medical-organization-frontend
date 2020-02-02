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
				<div class="apply" v-if="contactForm">
					<p class="apply__text">
						ГК ЮМед имеет 13 филиалов и более 40 медицинских представителей в Российской Федерации.
						Мы активно развиваемся и находимся в постоянном поиске специалистов,
						готовых расти вместе с нами.
						Сделайте первый шаг к работе в ЮМед уже сегодня – отправьте резюме.
					</p>
					<form class="apply__form" action="#" method="post">
						<button class="apply__close-button" type="button" @click="showContactForm"/>
						<label class="apply__label" for="apply-name">Ваше имя:
							<input class="apply__input" type="text" name="apply-name"
							id="apply-name" placeholder="Иванов Иван" required></label>
						<label class="apply__label" for="apply-email">Ваш email:
							<input class="apply__input" type="email" name="apply-email"
							id="apply-email" placeholder="example@example.ru" required></label>
						<label class="apply__label" for="apply-email">Регион:
							<input class="apply__input" type="text" name="apply-region"
							id="apply-region" placeholder="Москва" required></label>
						<label class="apply__label" for="apply-position">Желаемая должность:
							<input class="apply__input" type="text" name="apply-position"
							id="apply-position" placeholder="Введите название должности" required></label>
						<label class="apply__label" for="apply-resume">Прикрепите резюме:
							<input class="apply__input" type="file" name="apply-resume"
							id="apply-resume"></label>
						<button class="apply__button" type="submit">Отправить</button>
					</form>
				</div>
				<button class="career__button" type="primary" @click="showContactForm">Откликнуться</button>
				<div class="career__overlay" v-if="contactForm"/>
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

  contactForm = false;

  showVacancy() {
    this.vacancyIsShown = !this.vacancyIsShown;
  }

  showContactForm() {
    this.contactForm = !this.contactForm;
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
			width: 100%;
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
			@media (min-width: 768px) {
				width: 290px;
			}
		}
		&__overlay {
			width: 100%;
			height: 100%;
			min-height: 100vh;
			position: absolute;
			z-index: 6;
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.5);
		}
	}
	.apply {
		box-sizing: border-box;
		width: 90%;
		margin: 0 auto;
		padding: 35px 25px 35px;
		background-color: #ffffff;
		border: 1px solid #e7e7e7;
		position: fixed;
		z-index: 30;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		@media (min-width: 768px) {
			width: 740px;
			display: flex;
			justify-content: space-between;
		}
		@media (min-width: 1200px) {
			width: 850px;
		}
		&__close-button {
			width: 25px;
			height: 25px;
			padding: 0;
			position: absolute;
			top: 10px;
			right: 10px;
			border: none;
			background-image: url("../assets/svg/cross.svg");
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			background-color: transparent;
			outline: none;
			&:hover,
			&:focus {
				opacity: 0.5;
			}
		}
		&__input {
			box-sizing: border-box;
			font: inherit;
			padding: 15px;
			border: 1px solid #708095;
			margin-top: 5px;
			margin-bottom: 10px;
			width: 100%;
			background-color: transparent;
		}
		&__label {
			font-weight: bold;
		}
		&__button {
			box-sizing: border-box;
			cursor: pointer;
			font: inherit;
			font-weight: bold;
			min-height: 55px;
			width: 100%;
			border: none;
			padding: 10px 40px;
			background-color: #1B98E0;
			color: #ffffff;
			text-transform: uppercase;
		}
		&__text {
			margin: 0 0 30px;
			display: none;
			@media (min-width: 768px) {
					display: block;
					padding: 0 20px 0 0;
			}
		}
	}
</style>
