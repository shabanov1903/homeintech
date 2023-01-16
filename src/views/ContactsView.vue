<template>
  <div class="main-container">
    <div class="name-of-section">Контакты</div>

    <div class="contacts-container">

    </div>
  </div>
</template>

<script lang="ts">
import * as _is from "../../node_modules/is_js";
import InputText from 'primevue/inputtext';

export default {
  name: 'ContactsView',
  components: {
    InputText
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.contacts-container {
  
}
</style>
