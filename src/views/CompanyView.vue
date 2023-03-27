<template>
  <div class="galleria-container section-container">
    <div class="galleria-container-menu">
      <div class="gcm-header">{{images[activeIndex].header}}</div>
      <div class="gcm-text">{{images[activeIndex].text}}</div>
      <Button label="Отправить заявку" rounded/>
    </div>
    <Galleria :value="images" v-model:activeIndex="activeIndex" :numVisible="5" :circular="true" :autoPlay="true" :showThumbnails="false" :transitionInterval="5000">
      <template #item="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 100%; display: block; height: 100vh"/>
      </template>
    </Galleria>
  </div>
</template>

<script lang="ts">
import Galleria from 'primevue/galleria';
import Button from 'primevue/button';

export default {
  name: 'CompanyView',
  components: {
    Galleria,
    Button
  },
  data() {
    return {
      images: [
        {
          src: require('@/assets/images/banners/livingRoom.png'),
          alt: 'smart_home.png',
          header: 'Попробуйте умный дом вместе с HomeIntecH',
          text: 'Оказываем полный спектр услуг автоматизации квартир и частных домов'
        },
        {
          src: require('@/assets/images/banners/kitchenRoom.png'),
          alt: 'serv_service.png',
          header: 'Выбор устройств и согласование условий',
          text: 'Менеджер проконсультирует Вас и составит коммерческое предложение'
        },
        {
          src: require('@/assets/images/banners/hallRoom.png'),
          alt: 'smart_home.png',
          header: 'Монтажные работы',
          text: 'В удобное Вам время наши специалисты приедут и проведут монтажные работы по установке системы умного дома'
        },
        {
          src: require('@/assets/images/banners/bedRoom.png'),
          alt: 'serv_service.png',
          header: 'Установка и настройка',
          text: 'Наши специалисты установят и настроят сценарии умного дома, а также ознакомят Вас со всеми функциями и возможностями умного дома'
        },
        {
          src: require('@/assets/images/banners/bathRoom.png'),
          alt: 'smart_home.png',
          header: 'Сервисное обслуживание',
          text: 'При возникновении сложностей или неполадок, они будут устранены специалистами нашей компании'
        }
      ],
      activeIndex: 0
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.galleria-container {
  position: relative;
}

:deep(.p-galleria) {
  img {
    height: 75vh;
    object-fit: cover;
    filter: brightness(0.4);
  }
}

:deep(.p-button) {
  width: 200px;
  height: 55px;
  background-color: rgba(get-color(button), 0.7);
  display: block;
  margin-top: 15px;
  font-size: 1.1em;

  &:hover {
    background-color: get-color(button);
  }
  &:focus {
    background-color: get-color(button);
  }
}

.galleria-container-menu {
  position: absolute;
  bottom: 20vh;
  padding-left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  z-index: 1;

  @mixin text-style($font-size) {
    max-width: 50vw;
    font-size: $font-size;
    text-align: left;
    font-weight: 600;
    color: get-color(text-light);
    padding-bottom: 10px;
  }

  .gcm-header { @include text-style(3em) }
  .gcm-text { @include text-style(2em) }
}
</style>
