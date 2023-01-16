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
          text: 'Щиты распределительные этажные, квартирные, освещения, аварийного освещения (ЩРЭ, ЩЭ, ЩК, ЩО, ЩАО, ЩАП)'
        },
        {
          text: 'Главные распределительные щиты, главные щиты ввода и учета (ГРЩ, ГРЩД, ГЩВУ)'
        },
        {
          text: 'Вводно-распределительные устройства (ВРУ)'
        },
        {
          text: 'Шкафы автоматического ввода (АВР)'
        },
        {
          text: 'Щиты управления, автоматики, сигнализации, кондиционирования, вентиляции, пожаротушения, пожарной и охранной сигнализации (ЩУ)'
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
  background-image: linear-gradient(var(--bluegray-50), var(--bluegray-400));
}

.production-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 40%);
  grid-gap: 10px;
  justify-content: center;
  margin: 20px;
}
</style>
