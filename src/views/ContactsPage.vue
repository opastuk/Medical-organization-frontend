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
			<div class="addresses">
				<ul class="addresses__list">
					<li class="addresses__item" v-for="contact in contacts" :key="contact.id">
						<a class="addresses__link" href="#">
							<h3 class="addresses__title">{{contact.name}}</h3>
							<span class="addresses__value addresses__value--address" v-if="contact.address">{{contact.address}}</span>
							<span class="addresses__value addresses__value--tel" v-if="contact.number">{{contact.number}}</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="feedback">
				<h3 class="feedback__title">Написать письмо</h3>
				<form class="feedback__form" action="#" method="post">
					<label class="feedback__label" for="name-feedback-form">
						<span class="visually-hidden">Ваше имя</span>
						<input class="feedback__input" id="name-feedback-form"
						type="text" name="name" placeholder="Ваше имя" required="">
					</label>
					<label class="feedback__label" for="email-feedback-form">
						<span class="visually-hidden">Ваш email</span>
						<input class="feedback__input" id="email-feedback-form" type="email"
						name="email" placeholder="Ваш email" required="">
					</label>
					<label class="feedback__label" for="question-feedback-form">
						<span class="visually-hidden">Ваш вопрос</span>
						<textarea class="feedback__input" id="question-feedback-form"
						name="question" placeholder="Ваше письмо" required=""></textarea>
					</label>
					<button class="feedback__button" type="submit">Отправить</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
@Component({
})
export default class Contacts extends Vue {
  contacts = [
    {
      id: 0,
      name: 'Москва',
      number: '8 (985) 784-06-17',
      address: 'Коровинское ш., д.10, стр.2, офис 40',
    },
    {
      id: 1,
      name: 'Санкт-Петербург',
      number: '8 (915) 346-09-05',
      address: 'Ул.Новороссийская, д.26. лит.3, пом. 2-Н',
    },
    {
      id: 2,
      name: 'Краснодар',
      number: '8 (928) 035-26-59',
      address: 'Ул. Московская, д.5. пом.423',
    },
    {
      id: 3,
      name: 'Саратов',
      number: '8 (915) 099-74-74',
      address: 'Ул. Октябрьская, д.44',
    },
    {
      id: 4,
      name: 'Ярославль',
      number: '8 (931) 204-05-44',
      address: 'Пр. Октября, д.56. пом. 106',
    },
    {
      id: 5,
      name: 'Архангельск',
      number: '8 (916) 009-92-69',
      address: 'Ул. Вологодская, д.6, пом.3,4',
    },
    {
      id: 6,
      name: 'Екатеринбург',
      number: '8 (922) 183-79-70',
      address: 'Ул. Волгоградская, д.178, пом .19',
    },
    {
      id: 7,
      name: 'Челябинск',
      number: '8 (922) 231-49-86',
      address: 'Ул. Газиуллина, д.2Б, пом. 17',
    },
    {
      id: 8,
      name: 'Казань',
      number: '8 (937) 298-86-99',
    },
    {
      id: 9,
      name: 'Ростов-на-Дону',
      number: '8 (928) 758-29-51',
      address: 'Ул. Города Волос, д.6, комн. 302',
    },
    {
      id: 10,
      name: 'Пятигорск',
      number: '8 (929) 856-58-69',
      address: 'Ул.Ермолова, д.4, лит.Д, пом 206',
    },
    {
      id: 11,
      name: 'Сочи',
      number: '8 (928) 035-08-61',
    },
    {
      id: 12,
      name: 'Вологда',
      number: '8 (931) 503 -15-59',
      address: 'Ул.Галкинская, д.81, офис 21',
    },
    {
      id: 13,
      name: 'Нижний Новгород',
      number: '8 (930) 800-60-81',
      address: 'Ул. Обухова, д.11, офис 307',
    },
  ];
}
</script>

<style scoped lang="scss">
.contacts {
	&__headline {
		margin: 0 0 50px;
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
		display: none;
		@media (min-width: 768px) {
			display: block;
			margin: 0 auto 40px;
			position: relative;
			width: 714px;
			height: auto;
		}
	}
}
.addresses {
	margin-bottom: 40px;
	&__list {
		@include reset-list;
		@media (min-width: 768px) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		@media (min-width: 1200px) {
			&::after {
				content: "";
				flex: auto;
			}
		}
	}
	&__item {
		box-sizing: border-box;
		cursor: pointer;
		min-height: 150px;
		margin-bottom: 25px;
		padding: 15px;
		border: 1px solid #cccccc;
		border-radius: 10px;
		box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.2);
		&:focus,
		&:hover {
			border: 1px solid #6f6f6f;
		}
		@media (min-width: 768px) {
			width: 340px;
		}
		@media (min-width: 1200px) {
			&:last-child {
				margin-left: 40px;
			}
		}
	}
	&__link {
		@include reset-link;
		color: #0c2230;
	}
	&__title {
		font-size: 20px;
		margin: 0 0 15px;
		padding-bottom: 10px;
		border-bottom: 1px solid #cccccc;
	}
	&__value {
		display: block;
		position: relative;
		font-size: 14px;
		padding-left: 20px;
		margin-bottom: 10px;
		&--tel {
			&::before {
				content: "";
				width: 15px;
				height: 15px;
				position: absolute;
				top: 0;
				left: 0;
				background-image: url("../assets/svg/phone-contacts.svg");
				background-position: center;
				background-size: cover;
			}
		}
		&--address {
			&::before {
				content: "";
				width: 15px;
				height: 15px;
				position: absolute;
				top: 0;
				left: 0;
				background-image: url("../assets/svg/address.svg");
				background-position: center;
				background-size: cover;
			}
		}
	}
	}
.feedback {
	width: 100%;
	margin: 0 auto 50px;
	@media (min-width: 1200px) {
		width: 740px;
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
		&__button:hover,
		&__button:focus {
			opacity: 0.75;
		}
		&__button:active {
			opacity: 0.5;
		}
	}
	&__input {
		box-sizing: border-box;
		font: inherit;
		padding: 15px;
		border: 1px solid #708095;
		margin-bottom: 10px;
		width: 100%;
		background-color: transparent;
	}
	&__title {
		text-align: center;
		position: relative;
		padding-bottom: 30px;
		margin-bottom: 30px;

		&::after {
			content: "";
			width: 75%;
			height: 3px;
			background-color: #1B98E0;
			position: absolute;
			bottom: 1px;
			left: 50%;
			transform: translate(-50%);
		}

		@media (min-width: 768px) {
			margin-bottom: 50px;
			padding-bottom: 50px;
			&::after {
				content: "";
				width: 40%;
				height: 3px;
				background-color: #1B98E0;
				position: absolute;
				bottom: 1px;
				left: 50%;

			}
		}
	}
}
</style>
