<template>
  <div class="main-container">
    <div class="name-of-section">Наша команда</div>
    <div class="services-container">
      <Card v-for="employee in employees">
        <template #header>
            <img :alt="employee.url" :src="employee.url">
        </template>
        <template #title>
            {{ employee.name }}
        </template>
        <template #content>
            <div>{{ employee.position }}</div>
            <div>{{ employee.mail }}</div>
            <div>{{ employee.phone }}</div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from 'primevue/card';

export default {
  name: 'CommandView',
  components: {
    Card
  },
  data() {
    return {
      employees: [
        {
          url: require('@/assets/images/emp_Abrosimov.png'),
          name: 'Абросимов Алексей Вадимович',
          position: 'Проектировщик слаботочных систем',
          mail: 'abrosimov@homeintech.ru',
          phone: '+7 (996) 777-55-01'
        },
        {
          url: require('@/assets/images/emp_Loptev.png'),
          name: 'Лоптев Александр Владимирович',
          position: 'Проектировщик силовых сетей',
          mail: 'loptev@homeintech.ru',
          phone: '+7 (931) 654-55-20'
        },
        {
          url: require('@/assets/images/emp_Shabanov.png'),
          name: 'Шабанов Данил Валерьевич',
          position: 'Наладчик систем умного дома',
          mail: 'shabanov@homeintech.ru',
          phone: '+7 (996) 777-59-41'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    gap: 40px;
    @include large-desktop-only {
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
    }
    @include mobile-only {
      grid-template-columns: repeat(auto-fill, 170px);
    }

    margin: 20px;
  }

  :deep(.p-card) {
    width: 350px;
    height: 500px;
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
    padding: 0;
  }
</style>
