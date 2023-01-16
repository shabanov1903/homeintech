<template>
  <div class="background-section">
    <div class="main-container content-container">
      <div class="text">
        <p>HomeIntech</p>
        <p>HomeIntech - это инжиниринговая компания, предлагающая комплекс услуг полного цикла по проектированию, поставке, монтажу, пуско-наладке, автоматизации и диспетчеризации внутридомовых инженерных сетей зданий, включая системы электроснабжения, вентиляции, кондиционирования, пожарной сигнализации,  видеонаблюдения и мультимедиа систем, а также имеет собственный сборочный цех щитового оборудования.</p>
        <p>Умный дом - инженерная система, которая контролирует все процессы: освещение и управление шторами, обогрев пола, кондиционирование и вентиляцию, системы безопасности, системы протечек воды и многие другие – для создания идеальной атмосферы.</p>
      </div>
      <img src="@/assets/images/smart_home.png" alt="Engineer.png">
    </div>
    <div class="main-container">
      <div class="name-of-section">Как мы работаем?</div>
      <div class="stages">
        <div class="stage-of-work" v-for="stage in stages">
          <div class="stage-stage">{{stage.stage}}</div>
          <div class="stage-name">{{stage.name}}</div>
          <div class="stage-text">{{stage.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'TechnologiesView',
  data() {
    return {
      stages: [
        {
          stage: 1,
          name: 'Выбор устройств и согласование условий',
          text: 'Менеджер проконсультирует Вас и составит коммерческое предложение, отталкиваясь от Ваших предпочтений'
        },
        {
          stage: 2,
          name: 'Монтажные работы',
          text: 'В удобное Вам время наши специалисты приедут и проведут монтажные работы по установке системы умного дома'
        },
        {
          stage: 3,
          name: 'Установка и настройка',
          text: 'Наши специалисты установят и настроят сценарии умного дома, а также ознакомят Вас со всеми функциями и возможностями умного дома'
        },
        {
          stage: 4,
          name: 'Сервисное обслуживание',
          text: 'При возникновении сложностей или неполадок, они будут устранены специалистами нашей компании'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

  .background-section {
    background: linear-gradient(var(--bluegray-50), var(--bluegray-300));
    padding: 10px;
  }

  .content-container {
    display: flex;
    flex-flow: row wrap;

    @include mobile-only {
      flex-direction: column;
    }

    .text {
      width: 100%;
      @include desktop-only {
        width: 50%;
      }
      padding: 0 5%;

      p:first-child {
        color: var(--blue-700);
        font-size: 3em;
        font-weight: bold;
        text-align: center;
      }

      p:not(:first-child) {
        font-size: 1.2em;
        text-align: justify;
      }
    }

    img {
      width: 100%;
      @include desktop-only {
        width: 50%;
      }
      height: max-content;
      margin: auto;
      display: block;
      border-radius: 5px;
      filter: drop-shadow(6px 4px 3px var(--gray-500));
    }
  }

  .stages {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 25px;
  }

  .stage-of-work {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
  }
  .stage-stage {
    background-color: var(--bluegray-300);
    width: 30px;
    height: 30px;
    border-radius: 50%;

    @include flex-centering;
  }
  .stage-name {
    font-weight: bold;
    text-align: start;
    margin: 15px 0px;
  }
  .stage-text {
    text-align: start;
  }
</style>
