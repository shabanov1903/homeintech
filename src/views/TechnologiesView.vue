<template>
  <div>
    <div class="section-container" id="technologies-part-1">
      <p class="header2">Наши преимущества</p>
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
        <div class="static-photo">
          <img src="@/assets/images/any/tech_interier.png" alt="Interier.png">
        </div>
      </div>
      <div><i class="pi pi-chevron-down next-page" @click="toNextServicesPart()"></i></div>
    </div>
    <div class="section-container static-image-background" id="technologies-part-2" ref="technologies-part-2">
      <p class="header2">Наполните дом умными устройствами</p>
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="slide in slides">
            <p>{{slide.text}}</p>
            <img :src="slide.src"/>
          </div>
        </div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Swiper, { Navigation, Autoplay } from 'swiper';

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
      ],
      slides: [
        {
          src: require('@/assets/images/devices/houseDevice1.png'),
          text: 'Больше не придётся лишний раз вставать из теплой кровати, чтобы выключить свет'
        },
        {
          src: require('@/assets/images/devices/houseDevice2.png'),
          text: 'Ваши друзья точно оценят новые функции Вашего дома и будут Вам завидовать'
        },
        {
          src: require('@/assets/images/devices/houseDevice3.png'),
          text: 'Мониторинг необходимых параметров из любой точки мира обеспечит уверенность о безопасности квартиры'
        },
        {
          src: require('@/assets/images/devices/houseDevice4.png'),
          text: 'Удобное и красивое приложение важно не только для заказчика, но и для нас самих'
        },
        {
          src: require('@/assets/images/devices/houseDevice5.png'),
          text: 'Умные устройства богаты не только своим функционалом, но также современным и изящным дизайном'
        }
      ],
    }
  },
  mounted() {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      slidesPerView: 2,
      centeredSlides: true
    })
  },
  methods: {
    toNextServicesPart() {
      const element = this.$refs['technologies-part-2'];
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.static-photo {
  img {
    width: 80vw;
    display: block;
    border-radius: 5px;
    filter: drop-shadow(6px 4px 3px var(--gray-500));
  }
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

.static-image-background {
  background-image: url('@/assets/images/bg/bg_technologies.png');
  justify-content: space-evenly;
}

.swiper {
  width: 70vw;
  height: 50vh;
}

.swiper-slide-active {
  margin: 0px 10px;
  p {
    margin-top: unset;
    font-weight: 500;
  }
}

.swiper-slide-prev,
.swiper-slide-next {
  opacity: .5;
  filter: grayscale(1);
}

.swiper-slide {
  img {
    width: 30vw;
    height: 50vh;
    object-fit: cover;
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: get-color(text-light);

  &:hover {
    color: get-color(button);
  }
}
</style>
