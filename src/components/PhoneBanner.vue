<template>
  <Dialog header="Header" v-model:visible="display">
    Content
  </Dialog>
  <div class="wrapper">
    <div class="wrapper-item" :style="buttonPosition">
      <Button icon="pi pi-phone" class="p-button-raised p-button-rounded" ref="pi-button" @click="showBanner"/>
    </div>
  </div>
</template>

<script lang="ts">
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import TWEEN from '@tweenjs/tween.js';

export default {
  name: 'PhoneBanner',
  components: {
    Dialog,
    Button
  },
  props: {
    text: String
  },
  data() {
    return {
      display: false,
      btnPosition: 35
    }
  },
  mounted() {
    setInterval(() => {
      this.setButtonPosition(45);
      setTimeout(() => this.setButtonPosition(35), 500);
    }, 3000);
  },
  methods: {
    showBanner: function() {
      this.display = true;
    },
    setButtonPosition: function(value) {
      const element = this.$refs['pi-button'].$el;
      element.classList.toggle('button-blink');

      function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate);

      const pos = {btnPosition: this.btnPosition}
      const tween = new TWEEN.Tween(pos)
        .to({btnPosition: value}, 500)
        .easing(TWEEN.Easing.Quartic.InOut)
        .onUpdate(() => {
          this.btnPosition = pos.btnPosition;
        })
      tween.start();
    }
  },
  computed: {
    buttonPosition: function() {
      return {
        bottom: this.btnPosition.toFixed(0).toString().concat('px')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.wrapper {
  position: sticky;
  bottom: 0px;
  left: 0px;

  &-item {
    position: absolute;
    left: 35px;
    bottom: 35px;
  }
}

.button-blink {
  background-color: var(--bluegray-500) !important;
}

.p-button {
  box-shadow: 10px 10px 15px var(--bluegray-800);
  background-color: var(--bluegray-800);
}
</style>
