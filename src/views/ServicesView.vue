<template>
  <div>
    <Dialog :header="activeDialogData.name"
      v-model:visible="displayDialog"
      :style="{
        width: '50%'
      }">
      <div class="dialog-item" v-for="service in activeDialogData.services"><i class="pi pi-verified"></i> {{ service }}</div>
    </Dialog>
    <div class="main-container">
      <div class="name-of-section">Услуги</div>
      <div class="services-container">
        <Card v-for="card in cards" @click="showDialog(card)">
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
        <img src="@/assets/images/serv_mobile.svg" alt="Engineer.png">
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
  </div>
</template>

<script lang="ts">
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';

export default {
  name: 'ServicesView',
  components: {
    Card,
    Dialog
  },
  data() {
    return {
      cards: [
        {
          url: require('@/assets/images/serv_project.png'),
          name: 'Проектирование',
          text: 'Инженерный состав нашей компании насчитывает более 10 инженеров проектировщиков',
          services: ['Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок']
        },
        {
          url: require('@/assets/images/serv_logistics.png'),
          name: 'Поставка',
          text: 'Наша компания обладает широкими возможностями для поставки всех необходимых материалов',
          services: ['Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок']
        },
        {
          url: require('@/assets/images/serv_installation.png'),
          name: 'Монтаж',
          text: 'В штате HomeIntech собраны профессионалы, осуществляющие монтаж материалов и оборудования любой сложности',
          services: ['Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок']
        },
        {
          url: require('@/assets/images/serv_adjustment.png'),
          name: 'Наладка',
          text: 'Грамотно натроенная система залог комфортной эксплуатации',
          services: ['Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок']
        },
        {
          url: require('@/assets/images/serv_visualization.png'),
          name: 'Визуализация',
          text: 'Применение мобильных приложений позволяет сделать управление Умным домом понятным и удобным',
          services: ['Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок']
        },
        {
          url: require('@/assets/images/serv_service.png'),
          name: 'Обслуживание',
          text: 'Комплексное обслуживание включает в себя проверку компонентов умного дома и их диагностику',
          services: ['Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок']
        },
        {
          url: require('@/assets/images/serv_consultations.png'),
          name: 'Консультации',
          text: 'Мы всегда готовы подсказать Вам в любой непростой ситуации',
          services: ['Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок']
        },
        {
          url: require('@/assets/images/serv_calc.png'),
          name: 'Расчеты',
          text: 'Наши специалисты готовы сделать коммерческое предложение прямо сейчас',
          services: ['Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок', 'Подзалупный творожок']
        },
      ],
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
      displayDialog: false,
      activeDialogData: {
        url: null, name: null, text: null, services: null
      }
    }
  },
  methods: {
    showDialog(data: Object) {
      this.activeDialogData = data;
      this.displayDialog = true;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.main-container {
  background-image: url('@/assets/images/bg_services.png');
  background-size: 100%;
}
.name-of-section {
  color: var(--grey-600)
}

.services-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    gap: 40px;
    @include large-desktop-only {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-items: center;
    }
    @include mobile-only {
      grid-template-columns: repeat(auto-fill, 170px);
    }

    margin: 20px;
  }

  :deep(.p-card) {
    width: 250px;
    height: 350px;
    @include mobile-only {
      width: 170px;
      height: 280px;
    }

    cursor: pointer;

    background-color: var(--gray-300);
    box-shadow: 5px 1px 15px var(--gray-500);

    &:hover {
      background-color: var(--bluegray-300);
    }
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

.phone-container {
  @include flex-centering;
  flex-direction: row;
  padding: 25px;

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

.dialog-item {
  color: var(--bluegray-800);
  margin: 15px;
  display: flex;
  align-items: center;

  i {
    font-size: 1.25em;
    margin-right: 10px;
  }
}
</style>
