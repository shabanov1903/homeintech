<template>
  <div class="section-container">
    <p class="header2">Наши контакты</p>
    <div>
      <p class="header">Свяжитесь с нами сами</p>
      <p>Телефон: +7 (996) 771-49-03</p>
      <p>Email: homeintech@gmail.com</p>
    </div>
    <div class="local-centered-area">
      <p class="header">Или закажите обратный звонок</p>
      <Button label="Заказать" rounded/>
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
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.section-container {
  background-color: get-color(background-footer);
  color: get-color(text-light);
  justify-content: space-evenly;
}

.local-centered-area {
  @include flex-centering;
  flex-direction: column;
}

:deep(.p-button) {
  @include override-btn;
  width: 150px;
  height: 50px;
  background-color: rgba(get-color(button), $alpha: 0.0);
  border: 2px solid rgba(get-color(text-light), $alpha: 0.6);
  border-radius: 25px;
  
  &:hover {
    background-color: rgba(get-color(button), $alpha: 0.75);
  }
}
</style>
