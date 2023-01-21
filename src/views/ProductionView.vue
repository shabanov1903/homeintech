<template>
  <div class="main-container">
    <div class="name-of-section">Собственное производство</div>
    <div class="production-container">
      <ProductionItem v-for="production in productions" :text="production.text"></ProductionItem>
    </div>
  </div>
</template>

<script lang="ts">
import ProductionItem from '@/components/ProductionItem.vue';

export default {
  name: 'ProductionView',
  components: {
    ProductionItem
  },
  data() {
    return {
      productions: [
        {
          text: 'Щиты распределительные этажные, квартирные'
        },
        {
          text: 'Щиты освещения, аварийного освещения'
        },
        {
          text: 'Главные распределительные щиты'
        },
        {
          text: 'Щиты ввода и учета'
        },
        {
          text: 'Вводно-распределительные устройства (ВРУ)'
        },
        {
          text: 'Шкафы автоматического ввода (АВР)'
        },
        {
          text: 'Щиты управления, автоматики'
        },
        {
          text: 'Щиты сигнализации'
        },
        {
          text: 'Щиты кондиционирования, вентиляции'
        },
        {
          text: 'Щитыпожаротушения, пожарной сигнализации'
        },
        {
          text: 'Щиты охранной сигнализации'
        },
        {
          text: 'Пункты распределительные, щиты распределительные, силовые (ПР, ЩР, ЩРС, ЩС)'
        },
        {
          text: 'Шкафы и ящики управления и автоматики (ЯУ (ШУ) 8000, Я 8300, Я 5000, ЯС 5000, РУСМ 5000)'
        },
        {
          text: 'Шкафы нестандартные по индивидуальным схемам заказчика'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.main-container {
  background-color: var(--bluegray-50);
}

.production-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 40%);
  grid-gap: 10px;
  justify-content: center;
  margin: 20px;
}
</style>
