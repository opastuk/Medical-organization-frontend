import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [{
      id: 1,
      title: 'Санкт-Петербург',
      date: '28 августа 2019',
      dateTime: '28-08-2019',
      text: 'ООО "ЮМед" примет участие в ежегодной научно-практической конференции «Вреденовские чтения»',
    },
    {
      id: 2,
      title: 'Чебоксары',
      date: '5 июня 2019',
      dateTime: '05-06-2019',
      text: 'ОО "ЮМед" примет участие в XI Межрегиональной научно-практической конференции «Актуальные вопросы эндопротезирования крупных суставов',
    },
    {
      id: 3,
      title: 'Курган',
      date: '3 июня 2019',
      dateTime: '03-06-2019',
      text: 'ООО "ЮМед" примет участие в Международной научно-практической конференции «ИЛИЗАРОВСКИЕ ЧТЕНИЯ». Осложнения в ортопедии и травматологии. Клинические и экспериментальные аспекты',
    },
    {
      id: 4,
      title: 'Саратов',
      date: '12  апреля 2019',
      dateTime: '12-04-2019',
      text: 'ООО "ЮМед" примет участие во Всероссийская научно-практическая конференция с международным участием «Технологические инновации в травматологии, ортопедии и нейрохирургии: интеграция науки и практики»',
    },
    {
      id: 5,
      title: 'Ессентуки',
      date: '12 апреля 2019',
      dateTime: '12-04-2019',
      text: 'ООО "ЮМед" примет участие в Первом Северо-Кавказском ортопедическом научно-образовательном форуме с международным участием.',
    },
    {
      id: 6,
      title: 'Санкт-Петербург',
      date: '11 апреля 2019',
      dateTime: '11-04-2019',
      text: '11 апреля 2019 года компания "ЮМЕд" примет участие во Всероссийской конференции Молодых ученых «Актуальные вопросы травматологии и ортопедии».',
    },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
