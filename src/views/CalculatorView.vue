<template>
  <div class="section-container">
    <p class="header2">Выберите свой уровень комфорта, который удовлетворит все Ваши ожидания от технологии "Умный дом"</p>
    <div class="stages-container">
      <template v-for="stage in stages">
        <div class="card">
          <div>
            <div class="card-name">
              {{ stage.name }}
            </div>
            <div class="card-img">
              <img :src="stage.img">
            </div>
            <div class="card-desc">
              {{ stage.desc }}
            </div>
          </div>
          <Button label="Подробнее" rounded @click="openBanner()"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import * as _is from "../../node_modules/is_js";
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  name: 'CalculatorView',
  components: {
    Card,
    Button
  },
  inject: {
    banner: {
      from: 'Banner'
    }
  },
  methods: {
    openBanner: function() {
      this.banner.open();
    }
  },
  data() {
    return {
      stages: [
        {
          name: 'Стандарт',
          desc: 'Бюджетный вариант для небольшой квартиры площадью до 75 кв.м. Применение беспроводных технологий и открытой системы визуализации со стандартным интерфейсом',
          img: require('@/assets/images/comforts/standart.png')
        },
        {
          name: 'Комфорт',
          desc: 'Прекрасно подойдёт для многокомнатных квартир и небольших коттеджей. Используются комбинации проводных и беспроводных технологий. Система визуализации на выбор с интерфейсом, учитывающим требования заказчика',
          img: require('@/assets/images/comforts/comfort.png')
        },
        {
          name: 'Премиум',
          desc: 'Используются проводные технологии и система визуализации с платной лицензией, что позволяет выполнить системы больших объемов с неограниченным количеством устройств и функций',
          img: require('@/assets/images/comforts/premium.png')
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.section-container {
  justify-content: space-evenly;
  background: linear-gradient(125deg, black, gray, rgb(80, 79, 79));
  background-size: 200% 200%;

  -webkit-animation: bg-animation 10s ease infinite;
  -moz-animation: bg-animation 10s ease infinite;
  animation: bg-animation 10s ease infinite;

  .header2 {
    width: 75%;
    align-self: center;
  }
  color: get-color(text-light);
}

.stages-container {
  display: flex;
  justify-content: space-evenly;
}

.card {
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  &-name {
    text-align: start;
    font-size: 1.75em;
    font-weight: 600;
    padding-bottom: 10px;
  }
  &-img {
    img {
      width: 100%;
      height: 250px;
      border-radius: 10px;
    }
  }
  &-desc {
    text-align: start;
    padding: 5px 0px;
    font-weight: 500;
  }

  :deep(.p-button) {
    @include override-btn;
    width: 125px;
    height: 50px;
    background-color: rgba(get-color(button), $alpha: 0.0);
    border: 2px solid rgba(get-color(text-light), $alpha: 0.6);
    border-radius: 25px;
    &:hover {
      background-color: rgba(get-color(button), $alpha: 0.35);
    }
    margin-top: 10px;
  }
}
</style>
