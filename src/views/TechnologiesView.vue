<template>
  <div class="section-container">
    <p class="header">Наши преимущества</p>
    <div class="banner-container">
      <div class="banner-container-item">
        <div v-for="argument in arguments">
          <div><i style="font-size: 2em" :class="argument.class"></i></div>
          <div>
            <p>{{argument.name}}</p>
            <p>{{argument.text}}</p>
          </div>
        </div>
      </div>
      <div>
        <img src="@/assets/images/tech_interier.png" alt="Interier.png">
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'TechnologiesView',
  data() {
    return {
      arguments: [
        {
          name: "Выход на новый уровень комфорта",
          text: "Вы поразитесь как увлекательно и просто, создавать и менять атмосферу в доме",
          class: 'pi pi-thumbs-up'
        },
        {
          name: "Умный дом экономит Ваши средства",
          text: "Обеспечит снижение затрат на энергопотребление за счет эффективной настройки работы всех систем",
          class: 'pi pi-wallet'
        },
        {
          name: "Гарант защиты и безопасности жилья",
          text: "Вы будете знать обо всём, что в нём происходит, даже находясь в другом городе",
          class: 'pi pi-lock'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.section-container {
  justify-content: center;

  .header {
    font-size: 2.5em;
  }
}

img {
  width: 80vw;
  display: block;
  border-radius: 5px;
  filter: drop-shadow(6px 4px 3px var(--gray-500));
}

.banner-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 45px 25px 25px;

  img {
    width: 80%;
  }

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 35%;

    div {
      display: flex;
      align-items: center;

      div:last-child {
        display: unset;
        text-align: start;
        padding: 25px;

        p:first-child {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
