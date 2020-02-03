<template>
  <div class="contact">
    <div class="contacts__headline">
      <div class="contacts__overlay"></div>
      <h2 class="contacts__heading">Контакты</h2>
    </div>
    <div class="container">
      <router-link class="contact__back-link" to="/contacts">Назад к списку</router-link>
      <h2 class="contact__headline">{{contact.name}}</h2>
      <section class="contact__description">
        <ul class="contact__list">
          <li class="contact__item contact__item--address" v-if="contact.address">
            <span class="contact__value">Адрес:</span>
            <span class="contact__value">{{contact.address}}</span>
          </li>
          <li class="contact__item contact__item--tel">
            <span class="contact__value">Телефон:</span>
            <span class="contact__value">{{contact.number}}</span>
          </li>
        </ul>
        <div class="contact__map" v-if="contact.mapToken">
          <iframe :src="`https://yandex.ru/map-widget/v1/?um=constructor%${contact.mapToken}&amp\;source=constructor`" width="100%" height="650" frameborder="0" loading="lazy"></iframe>
        </div>
      </section>
      <section class="main-contacts__feedback">
        <h2 class="feedback__title">Написать письмо</h2>
        <form class="feedback__form" action="#" method="post">
          <label class="feedback__label" for="name-feedback-form">
            <span class="visually-hidden">Ваше имя</span>
            <input class="feedback__input" id="name-feedback-form" type="text" name="name" placeholder="Ваше имя" required>
          </label>
          <label class="feedback__label" for="email-feedback-form">
            <span class="visually-hidden">Ваш email</span>
            <input class="feedback__input" id="email-feedback-form" type="email" name="email" placeholder="Ваш email" required>
          </label>
          <label class="feedback__label" for="question-feedback-form">
            <span class="visually-hidden">Ваш вопрос</span>
            <textarea class="feedback__input" id="question-feedback-form" name="question" placeholder="Ваше письмо" required></textarea>
          </label>
          <button class="feedback__button" type="submit">Отправить</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContactPage extends Vue {
    contact = {};

    mounted() {
      this.contact = this.$store.state.contacts[this.$route.params.id];
    }
}
</script>

<style scoped lang="scss">
.container {
  width: 290px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 690px;
  }

  @media (min-width: 1200px) {
    width: 1100px;
  }
}
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
}
.contact {
  &__back-link {
    color: #1B98E9;
    padding-left: 30px;
    position: relative;
    &::before {
      content: url('../assets/svg/back-arrow.svg');
      width: 25px;
      height: 25px;
      position: absolute;
      top: -3px;
      left: 0;
    }
  }

  &__headline {
    font-size: 35px;
    margin: 25px 0 50px;
  }

  &__description {
    margin-bottom: 80px;
  }

  &__list {
    @include reset-list;
  }

  &__item {
    padding-left: 60px;
    margin-bottom: 30px;
    position: relative;

    &--address:before{
      content: url('../assets/svg/contact-pin.svg');
      width: 40px;
      height: 40px;
      position: absolute;
      top: 2px;
      left: 0;
    }

    &--tel:before {
      content: url('../assets/svg/tel-card.svg');
      width: 40px;
      height: 40px;
      position: absolute;
      top: 2px;
      left: 0;
    }
  }

  &__value {
    display: block;

    &:nth-of-type(odd) {
      font-weight: bold;
    }
  }

  &__map {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border: 1px solid #ccc;
    margin: 0 auto;
  }
}

.main-contacts__feedback {
  width: 100%;
  margin: 0 auto 80px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 740px;
  }
}

.feedback {
  &__title {
    text-align: center;
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      margin-bottom: 50px;
      padding-bottom: 50px;
    }

    &::after {
      content: "";
      width: 75%;
      height: 3px;
      background-color: #1B98E0;
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translate(-50%);

      @media (min-width: 768px) {
        content: "";
        width: 40%;
        height: 3px;
        background-color: $blue;
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translate(-50%);
      }
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
}

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

    &__heading {
      @include reset-text;
      font-size: 35px;
      position: relative;
      z-index: 1;
    }
  }
}
</style>
