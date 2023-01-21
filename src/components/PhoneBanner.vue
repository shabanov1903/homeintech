<template>
  <div class="container">
    <div>
      <InputText placeholder="Имя" v-model="name" />
    </div>
    <div>
      <InputText placeholder="Почта" v-model="mail" />
    </div>
    <div>
      <InputText placeholder="Телефон" v-model="phone" />
    </div>
    <div class="button">
      <Button label="Отправить" @click="sendData"/>
    </div>
  </div>
</template>

<script lang="ts">
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
  name: 'PhoneBanner',
  components: {
    Dialog,
    Button,
    InputText
  },
  data() {
    return {
      name: '',
      mail: '',
      phone: ''
    }
  },
  methods: {
    sendData: function() {
      this.$emit('sendData', {
        name: this.name,
        mail: this.mail,
        phone: this.phone
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    text-align: center;
    margin: 10px;
  }
}


.button {
  align-self: flex-end;
}
:deep(.p-button) {
  background: var(--bluegray-700);
}
:deep(.p-inputtext) {
  width: 100%;
}
</style>
