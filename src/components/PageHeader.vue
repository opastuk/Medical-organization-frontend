<template>
	<div>
		<header class="header">
			<a class="header__logo-link"><img src="#" alt="Юмед"></a>
			<button class="header__toggle"></button>
			<ul class="header__list">
				<li class="header__item">
						<a class="header__item">Главная</a>
				</li>
				<li class="header__item">
					<a class="header__item">Новости</a>
				</li>
				<li class="header__item">О нас
					<ul class="header__list--sub">
						<li class="header__item--sub">
							<a class="header__item--sub">О компании</a>
						</li>
						<li class="header__item--sub">
							<a class="header__item--sub">Карьера</a>
						</li>
						<li class="header__item--sub">
							<a class="header__item--sub">Пациентам</a>
						</li>
						<li class="header__item--sub">
							<a class="header__item--sub">Реквизиты</a>
						</li>
						<li class="header__item--sub">
							<a class="header__item--sub">Презентации</a>
						</li>
					</ul>
				</li>
				<li class="header__item">
					<a class="header__item">Наши клиенты</a>
				</li>
				<li class="header__item"
					<a class="header__item">Каталог</a>
				</li>
				<li class="header__item">
					<a class="header__item">Контакты</a>
				</li>
			</ul>
		</header>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class PageHeader extends Vue {
}
</script>

<style scoped lang="scss">

</style>
