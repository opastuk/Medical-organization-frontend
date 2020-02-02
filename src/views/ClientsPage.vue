<template>
	<div class="clients">
		<div class="clients__headline">
			<div class="clients__overlay"/>
			<h2 class="clients__heading">Наши клиенты</h2>
		</div>
		<div class="clients__wrapper">
			<p class="clients__subtitle">
				Деятельность компании завоевала доверие специалистов в более 200 лечебных учреждениях.
				Среди них такие крупные и известные медицинские центры, как:
			</p>
			<ul class="clients__list">
				<li class="clients__item" v-for="client in clients" :key="client.id">
					<a class="clients__link" :href="client.href" target="_blank" rel="noopener">
						<img class="clients__img"
						:src="require(`../assets/img/${client.id}-client.jpg`)" :alt="client.name">
						<p class="clients__description">{{client.name}}</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
})
export default class Clients extends Vue {
  clients = [
    {
      id: 0,
      name: 'ФГБУ «РННИИТО им. Р.Р. Вредена» (Санкт-Петербург)',
      href: 'https://rniito.org/',
    },
    {
      id: 1,
      name: 'РНЦ «Восстановительная травматология и ортопедия» им. акад. Г.А. Илизарова (Курган)',
      href: 'http://www.ilizarov.ru/',
    },
    {
      id: 2,
      name: 'ФГБУ «Федеральный центр травматологии, ортопедии и эндопротезирования» (Чебоксары)',
      href: 'https://www.orthoscheb.com/',
    },
    {
      id: 3,
      name: 'ГБУЗ «Саратовский научно-исследовательский институт травматологии и ортопедии» (Саратов)',
      href: 'https://www.sarniito.com/',
    },
    {
      id: 4,
      name: 'ФГБУ «Детский ортопедический научно-исследовательский институт им. Г.И Турнера» (Санкт-Петербург)',
      href: 'https://www.rosturner.ru/',
    },
    {
      id: 5,
      name: 'ФГБУ «Северо-Кавказский многопрофильный медицинский центр РФ» (г. Беслан)',
      href: 'http://skmmc.ru/',
    },
    {
      id: 6,
      name: 'ФГБОУ ВО «Приволжский исследовательский медицинский университет» Минздрава России',
      href: 'http://www.nniito.ru/',
    },
    {
      id: 7,
      name: 'ГБУЗ «НИИ-ККБ №1 им. проф. С.В. Очаповского» (Краснодар)',
      href: 'https://www.kkbo.ru/',
    },
    {
      id: 8,
      name: 'ФГБУ ФЦВМТ Минздрава России (Калининград)',
      href: 'https://kldcardio.ru/',
    },
    {
      id: 9,
      name: 'ГАУЗ ЯО «Клиническая больница скорой медицинской помощи им. Н.В. Соловьёва» (Ярославль)',
      href: 'http://bolnica-solovyeva-76.ru/',
    },
    {
      id: 10,
      name: 'Ивановский областной госпиталь для ветеранов войн (Иваново)',
      href: 'http://ogvv37.ru/',
    },
    {
      id: 11,
      name: 'ФГУ Северный медицинский центр им. Семашко (Архангельск)',
      href: 'http://nmcs.ru/',
    },
    {
      id: 12,
      name: 'ФГБОУ ВО СОГМА (Владикавказ)',
      href: 'http://sogma.ru/',
    },
    {
      id: 13,
      name: 'ООО «Госпиталь восстановительных инновационных технологий» (Нижний Тагил)',
      href: 'https://platno.gorpolikliniki.ru/sverdlovskaya-oblast/nizhnij-tagil/kl5505',
    },
  ];
}
</script>

<style scoped lang="scss">
	.clients {
		&__headline {
			margin: 0 0 75px;
			padding: 85px 0;
			background-color: #e7e7e7;
			background-image: url("../assets/img/clients.jpeg");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
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
			width: 85%;
			margin: 0 auto;
			@media (min-width: 1200px) {
				width: 1100px;
			}
		}
		&__subtitle {
			margin: 0 0 75px;
			text-align: center;
		}
		&__list {
			@include reset-list;
			@media (min-width: 768px) {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				align-items: center;
			}
			@media (min-width: 1200px) {
				justify-content: space-between;
				&::after {
					content: "";
					flex: auto;
				}
			}
		}
		&__item {
			width: 230px;
			height: 350px;
			padding: 0 0 15px;
			margin: 0 auto 30px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
			&:hover,
			&:focus {
				box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
			}
			@media (min-width: 768px) {
				margin: 0 30px 30px 0;
			}
			@media (min-width: 1200px) {
				&:last-child {
					margin-left: 20px;
				}
			}
		}
		&__link {
			@include reset-link;
			color: #000000;
		}
		&__img {
			width: 100%;
			height: 175px;
		}
		&__description {
			@include reset-text;
			padding: 20px;
			text-align: center;
		}
	}
</style>
