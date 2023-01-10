<template>
  <div class="main-container">
    <div class="name">Услуги</div>
    <div class="services-container">
      <Card v-for="card in cards">
        <template #header>
            <img :alt="card.url" :src="card.url">
        </template>
        <template #title>
            {{ card.name }}
        </template>
        <template #content>
            {{ card.text }}
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from 'primevue/card';

export default {
  name: 'ServicesView',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          url: require('@/assets/images/serv_project.png'),
          name: 'Проектирование',
          text: 'Инженерный состав нашей компании насчитывает более 10 инженеров проектировщиков'
        },
        {
          url: require('@/assets/images/serv_logistics.png'),
          name: 'Поставка',
          text: 'Наша компания обладает широкими возможностями для поставки всех необходимых материалов'
        },
        {
          url: require('@/assets/images/serv_installation.png'),
          name: 'Монтаж',
          text: 'В штате HomeIntech собраны профессионалы, осуществляющие монтаж материалов и оборудования любой сложности'
        },
        {
          url: require('@/assets/images/serv_adjustment.png'),
          name: 'Наладка',
          text: 'Грамотно натроенная система залог комфортной эксплуатации'
        },
        {
          url: require('@/assets/images/serv_visualization.png'),
          name: 'Визуализация',
          text: 'Применение мобильных приложений позволяет сделать управление Умным домом понятным и удобным'
        },
        {
          url: require('@/assets/images/serv_service.png'),
          name: 'Обслуживание',
          text: 'Комплексное обслуживание включает в себя проверку компонентов умного дома и их диагностику'
        },
        {
          url: require('@/assets/images/serv_consultations.png'),
          name: 'Консультации',
          text: 'Мы всегда готовы подсказать Вам в любой непростой ситуации'
        },
        {
          url: require('@/assets/images/serv_calc.png'),
          name: 'Расчеты',
          text: 'Наши специалисты готовы сделать коммерческое предложение прямо сейчас'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';
  .name {
    font-size: 3em;
    font-weight: bold;
  }

  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    @include large-desktop-only {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @include mobile-only {
      grid-template-columns: repeat(auto-fill, 170px);
    }

    gap: 40px;
    justify-content: center;
    margin: 20px;
  }

  :deep(.p-card) {
    width: 250px;
    height: 350px;
    @include mobile-only {
      width: 170px;
      height: 280px;
    }

    background-color: var(--gray-300);
    box-shadow: 5px 1px 15px var(--gray-500);
  }
  
  :deep(.p-card-title) {
    @include mobile-only {
      font-size: 1em;
    }
  }

  :deep(.p-card-content) {
    font-size: 0.9em;
    @include mobile-only {
      font-size: 0.7em;
    }
    font-family: "Montserrat", sans-serif;
  }
</style>
