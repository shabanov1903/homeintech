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
          <div>
            <p>Телефон</p>
            <InputText v-model="phone" />
          </div>
          <div class="button">
            <Button label="Отправить" @click="sendData" />
            <i v-if="displayOkSend" class="pi pi-check-circle"></i>
            <span v-if="displayOkSend">отправлено</span>
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
import { Timestamp } from "firebase/firestore/lite";

export default {
  name: 'ContactsView',
  components: {
    InputText,
    Button
  },
  inject: {
    db: {
      from: 'DB'
    }
  },
  data() {
    return {
      name: '',
      mail: '',
      phone: '',
      displayOkSend: false
    }
  },
  methods: {
    sendData: async function() {

      this.displayOkSend = true;
      setTimeout(() => this.displayOkSend = false, 2000);

      const user = {
        Name: this.name,
        Mail: this.mail,
        Phone: this.phone,
        Date: Timestamp.fromDate(new Date()),
        IsChecked: false
      }

      await this.db.addUser(user);
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.background-section {
  background-image: url('@/assets/images/bg_contacts.png');
  background-size: 100%;
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
      margin: 20px 0px;
      display: flex;
      align-items: center;

      i {
        color: green;
        font-size: 1.4em;
        padding: 0px 10px 0px 20px;
      }
      span {
        color: green;
        font-size: 0.8em;
      }
    }
  }
}

:deep(.p-inputtext) {
  background: var(--bluegray-200);
  width: 75%;
}

:deep(.p-button) {
  background: var(--bluegray-700);
  width: 50%;
  align-self: flex-end;
}
</style>
