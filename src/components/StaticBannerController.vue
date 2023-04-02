<template>
  <Dialog
    :showHeader="false"
    v-model:visible="displayDialog"
    :style="{width: '40vw'}"
    ref="pi-dialog"
    :contentStyle="{
      padding: '0px 10px 10px',
      borderRadius: '5px',
      background: 'linear-gradient(rgba(15,167,217, 0.8) 10%, #212121 80%)'
    }">
    <div class="close" @click="closeDialog('pi-dialog')"><i class="pi pi-times-circle"></i></div>
    <div class="dialog-header">Отправьте нам Ваши контактные данные</div>
    <BannerContent @sendData="sendData"></BannerContent>
  </Dialog>
  <Dialog
    :showHeader="false"
    v-model:visible="displayMessage"
    ref="pi-message"
    :contentStyle="{
      backgroundColor: 'var(--bluegray-50)',
      borderRadius: '5px',
      fontSize: '1.2em'
    }">
    <p>Уважаемый(-ая), {{ data.name }}!</p>
    <p>Ваши данные успешно отправлены на наш сервер</p>
    <p>С Вами свяжутся в ближайшее время</p>
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
import BannerContent from './BannerContent.vue';
import TWEEN from '@tweenjs/tween.js';
import { Timestamp } from "firebase/firestore/lite";
import { Subject } from 'rxjs';

export default {
  name: 'StaticBannerController',
  components: {
    Dialog,
    Button,
    BannerContent
  },
  props: {
    text: String
  },
  inject: {
    db: {
      from: 'DB'
    },
    banner: {
      from: 'Banner'
    }
  },
  data() {
    return {
      displayDialog: false,
      displayMessage: false,
      btnPosition: 35,
      data: Object
    }
  },
  mounted() {
    setInterval(() => {
      this.setButtonPosition(45);
      setTimeout(() => this.setButtonPosition(35), 500);
    }, 3000);

    const subject: Subject<boolean> = this.banner.getSubject();
    subject.subscribe(param => {
      if (param) {
        this.showBanner();
      }
    })
  },
  methods: {
    showBanner: function() {
      this.displayDialog = true;
    },
    setButtonPosition: function(value) {
      const element = this.$refs['pi-button']?.$el;
      element?.classList?.toggle('button-blink');

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
    },
    closeDialog: function(dialogName: string) {
      const dialog = this.$refs[dialogName];
      dialog.close();
    },
    sendData: async function(data) {
      this.data = data;
      let {name, mail, phone} = data;

      const user = {
        Name: name,
        Mail: mail,
        Phone: phone,
        Date: Timestamp.fromDate(new Date()),
        IsChecked: false
      }

      await this.db.addUser(user);

      this.closeDialog('pi-dialog');
      this.displayMessage = true;

      setTimeout(() => this.closeDialog('pi-message'), 3000);
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
  background-color: rgba(get-color(button), .45) !important;
}

.p-button {
  background-color: get-color(background-secondary);

  &:hover, &:focus {
    background-color: get-color(button);
  }
}

.close {
  margin: 15px 0px;
  display: flex;
  justify-content: end;

  i {
    font-size: 1.5em;
    color: rgba(get-color(text-light), .75);
    cursor: pointer;

    &:hover {
      color: rgba(get-color(text-dark), .35);
    }
  }
}

.dialog-header {
  text-align: center;
  font-size: 1.2em;
  color: get-color(text-light);
  margin: 15px;
}
</style>
