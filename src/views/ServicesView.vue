<template>
  <div>
    <div class="section-container" id="services-part-1">
      <p class="header">Это создаст уют Вашему дому</p>
      <div class="phone-container">
        <div class="phone-container-left">
          <div v-for="titul in phoneLeft">
            <div>
              <p>{{titul.name}}</p>
              <p>{{titul.text}}</p>
            </div>
            <div><i style="font-size: 2em" :class="titul.class"></i></div>
          </div>
        </div>
        <div>
          <img src="@/assets/images/any/serv_mobile.svg" alt="Engineer.png">
        </div>
        <div class="phone-container-right">
          <div v-for="titul in phoneRight">
            <div><i style="font-size: 2em" :class="titul.class"></i></div>
            <div>
              <p>{{titul.name}}</p>
              <p>{{titul.text}}</p>
            </div>
          </div>
        </div>
      </div>
      <div><i class="pi pi-chevron-down next-page" @click="toNextServicesPart()"></i></div>
    </div>
    <div class="section-container static-image-background" id="services-part-2" ref="services-part-2">
      <p class="header">Мы предлагаем технологии, которые помогут Вам жить в комфорте уже сегодня</p>
      <div class="services-container">
        <div class="service" v-for="service in services">
          <div class="service-icon"><i :class="service.class"></i></div>
          <div class="service-name">{{service.name}}</div>
          <div class="service-text">{{service.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'ServicesView',
  data() {
    return {
      phoneLeft: [
        {
          name: "Управление освещением",
          text: "Настройте особый свет на все случаи жизни. Чтобы каждый день был ярким",
          class: 'pi pi-sun'
        },
        {
          name: "Шторы/жалюзи с электроприводом",
          text: "Закрытие и открытие одним нажатием клавиши или с применением гибких сценариев",
          class: 'pi pi-sort-amount-up-alt'
        },
        {
          name: "Видеонаблюдение",
          text: "Умные камеры позволят Вам понять, кто звонит в дверь, когда Вас нет дома",
          class: 'pi pi-video'
        }
      ],
      phoneRight: [
        {
          name: "Настройка микроклимата",
          text: "Обеспечение рациональной и комфортной работы всей системы климат-контроля",
          class: 'pi pi-tablet'
        },
        {
          name: "Охранно-пожарная сигнализация",
          text: "Получайте моментальные оповещения в случае взлома, пожара или протечки",
          class: 'pi pi-shield'
        },
        {
          name: "Мультимедиа",
          text: "Управляйте музыкой и кино с любых носителей в каждой точке в дома",
          class: 'pi pi-volume-up'
        }
      ],
      services: [
        {
          name: "Проектирование",
          text: "Составление технического задания, проектирование, подбор оборудования, создание проекта кабельных трасс и полной спецификации с конечным согласованием",
          class: 'pi pi-list'
        },
        {
          name: "Монтаж",
          text: "Монтаж кабельных трасс, шеф-монтаж в случае выполнения работ подрядчиком заказчика, монтаж щитов и оборудования систем умного дома",
          class: 'pi pi-wrench'
        },
        {
          name: "Настройка",
          text: "Интеграция оборудования на объекте, программирование системы, настройка пользовательского интерфейса и сценариев",
          class: 'pi pi-mobile'
        },
        {
          name: "Обслуживание",
          text: "Обучение использования системы, плановая дополнительная настройка через два месяцапосле запуска, полное техническое обслуживание по гарантии",
          class: 'pi pi-comments'
        }
      ]
    }
  },
  methods: {
    toNextServicesPart() {
      const element = this.$refs['services-part-2'];
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.phone-container {
  @include flex-centering;
  flex-direction: row;
  padding: 10px;

  &-left {
    display: flex;
    flex-direction: column;
    width: 30%;

    div {
      display: flex;
      flex-direction: row;
      text-align: right;
      padding: 10px;

      div:first-child {
        display: unset;

        p:first-child {
          font-weight: bold;
          margin: unset;
        }
      }
    }
  }
  &-right {
    display: flex;
    flex-direction: column;
    width: 30%;

    div {
      display: flex;
      flex-direction: row;
      text-align: left;
      padding: 10px;

      div:last-child {
        display: unset;

        p:first-child {
          font-weight: bold;
          margin: unset;
        }
      }
    }
  }
}

.static-image-background {
  background-image: url('@/assets/images/bg/bg_services.png');
}

.services-container {
  display: flex;
  flex-flow: row nowrap;
  margin: 5vh 10vw; 

  .service {
    margin: 25px;
    width: 20vw;

    &-icon {
      i {
        font-size: 4em;
      }
    }

    &-name {
      margin: 20px 0px;
      font-weight: 600;
      font-size: 1.5em;
    }

    &-text {
      margin: 10px 0px;
      line-height: 1.5;
      font-weight: 600;
    }

    &:hover {
      color: get-color(button);
      cursor: default;
    }
  }
}
</style>
