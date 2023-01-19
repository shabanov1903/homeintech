<template>
  <div class="background-section">
    <div class="main-container content-container">
      <div class="name-of-section">Наши технологии</div>
      <div>
        <Carousel :value="technologies" :numVisible="1" :numScroll="1" orientation="vertical" :circular="true" :autoplayInterval="5000">
          <template #item="slotProps">
            <div class="carousel-container">
              <a :href="slotProps.data.link" target="_blank">
                <img :src="slotProps.data.url" :alt="slotProps.data.url" />
              </a>
              <div class="carousel-container-text">{{slotProps.data.text}}</div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';

export default {
  name: 'TechnologiesView',
  components: {
    Carousel,
    Galleria
  },
  data() {
    return {
      technologies: [
        {
          text: 'KNX - Коммуникационная шина, широко используемая для автоматизации зданий',
          link: 'https://www.knx.org/',
          url: require('@/assets/images/tech_knx.png')
        },
        {
          text: 'Home Assistant - Одна из самых популярных систем организации, автоматизации и управления устройствами умного дома и интернета вещей',
          link: 'https://www.home-assistant.io/',
          url: require('@/assets/images/tech_homeAssistant.png')
        },
        {
          text: 'Yandex Alisa - Виртуальный голосовой помощник, созданный компанией Яндекс',
          link: 'https://yandex.ru/alice',
          url: require('@/assets/images/tech_yandex.png')
        },
        {
          text: 'Aqara - Ведущий производитель систем класса «Умный дом» на самом большом рынке технологичных устройств в мире',
          link: 'https://www.aqara.com/',
          url: require('@/assets/images/tech_aqara.png')
        },
        {
          text: 'Iridium Mobile - Комплекс программ для управления оборудованием домашней и коммерческой автоматизации, безопасностью и мультимедиа',
          link: 'https://iridi.com/',
          url: require('@/assets/images/tech_iridiumMobile.png')
        },
        {
          text: 'Modbus - Открытый коммуникационный протокол, широко применяемый в промышленности для организации связи между электронными устройствами',
          link: 'https://modbus.org/',
          url: require('@/assets/images/tech_modbus.png')
        },
        {
          text: 'WirenBoard - Универсальные контроллеры для автоматизации с открытым ПО на базе Linux',
          link: 'https://wirenboard.com/',
          url: require('@/assets/images/tech_wirenboard.png')
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.background-section {
  background-image: url('@/assets/images/bg_technologies.png');
  background-size: 100%;
}
.name-of-section {
  color: black;
}

.content-container {
  display: flex;
  flex-flow: column wrap;
}

.carousel-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  &-text {
    margin: 20px;
    font-size: 1.75em;
    width: 80%;
    color: black;
  }
}

:deep(.p-carousel-items-content) {
  height: 60vh !important;
}

img {
  width: 80vw;


  display: block;
  border-radius: 5px;
  filter: drop-shadow(6px 4px 3px var(--gray-500));
}
</style>
