<template>
	<div class="contacts">
		<div class="contacts__headline">
			<div class="contacts__overlay"/>
			<h2 class="contacts__heading">Контакты</h2>
		</div>
		<div class="contacts__wrapper">
			<custom-map/>
			<div class="addresses">
				<ul class="addresses__list">
					<li class="addresses__item" v-for="contact in contacts" :key="contact.id">
						<router-link class="addresses__link" :to="`/contacts/${contact.id}`">
							<h3 class="addresses__title">{{contact.name}}</h3>
							<span class="addresses__value addresses__value--address" v-if="contact.address">{{contact.address}}</span>
							<span class="addresses__value addresses__value--tel" v-if="contact.number">{{contact.number}}</span>
						</router-link>
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
import CustomMap from '../components/CustomMap.vue';

@Component({
  components: {
    CustomMap,
  },
})
export default class Contacts extends Vue {
    contacts = [];

    mounted() {
      this.contacts = this.$store.state.contacts;
    }
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
