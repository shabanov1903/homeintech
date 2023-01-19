<template>
  <div class="background-section">
    <div class="main-container">
      <div class="name-of-section">Контакты</div>
      <div class="contacts-container">
        <div class="our-contacts">
          <p>Почта</p>
          <p>info@homeintech.ru</p>
          <p>Телефоны</p>
          <p>+7 (996) 771-49-03</p>
          <p>+7 (996) 771-49-04</p>
          <p>+7 (996) 771-49-05</p>
        </div>
        <div class="your-contacts">
          <p>Закажите обратный звонок</p>

          <div>
            <p>Имя</p>
            <InputText v-model="name" />
          </div>
          <div>
            <p>Почта</p>
            <InputText v-model="mail" />
          </div>
          <div class="button">
            <Button label="Отправить" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as _is from "../../node_modules/is_js";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'ContactsView',
  components: {
    InputText,
    Button
  },
  data() {
    return {
      name: '',
      mail: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.background-section {
  background-color: #1e2d40;
}
.name-of-section {
  color: white;
}

.contacts-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .our-contacts,
  .your-contacts {
    font-size: 1.25em;
    color: white;
    text-align: left;
    width: 25%;

    div {
      p {
        font-size: 0.8em;
      }
    }

    .button {
      margin: 15px 0px;
    }
  }
}

:deep(.p-inputtext) {
  background: var(--bluegray-200);
  width: 75%;
}
</style>
