<template>
  <router-view />
</template>

<script lang="ts">import { DB } from './services/firebase/firebase.db';

export default {
  provide() {
    return {
      DB: new DB()
    }
  }
}
</script>

<style lang="scss">
@import "primevue/resources/primevue.min.css";
@import "primevue/resources/themes/md-light-indigo/theme.css";
@import "primeicons/primeicons.css";
@import "swiper/swiper.min.css";
@import "swiper/css/navigation";

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0px 0px;
}
</style>
