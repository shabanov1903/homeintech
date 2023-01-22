<template>
  <div>
    <div class="name-of-section">Необработанные заявки</div>
    <div class="main-container">
      <Card v-for="user in users">
        <template #header>
            {{user.Name}}
        </template>
        <template #content>
            <p>Почта: {{user.Mail}}</p>
            <p>Телефон: {{user.Phone}}</p>
            <p>Обработан:
              <i v-if="user.IsChecked" class="pi pi-check-circle" style="color: green; font-size: 0.9em"></i>
              <i v-else class="pi pi-times-circle" style="color: red; font-size: 0.9em"></i></p>
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Обработать" @click="setCheck(user)"/>
        </template>
    </Card>
    </div>
    <Button icon="pi pi-home" style="background-color: var(--bluegray-600); margin-bottom: 20px;" label="На главную" @click="toMain()"/>
  </div>
</template>

<script lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import { User } from "@/services/firebase/firebase.db";

export default {
  name: 'AdminView',
  components: {
    Card,
    Button
  },
  inject: {
    db: {
      from: 'DB'
    }
  },
  data(): IData {
    return {
      users: []
    }
  },
  methods: {
    getAllUsers: async function () {
      this.users = await this.db.getAllUsers();
    },
    getNotCheckedUsers: async function () {
      this.users = await this.db.getNotCheckedUsers();
    },
    setCheck: async function(user: User) {
      user.IsChecked = true;
      await this.db.addUser(user);

      this.users = this.users.filter(user => !user.IsChecked);
    },
    toMain: function() {
      this.$router.push({name: 'main'})
    }
  },
  mounted() {
    this.getNotCheckedUsers();
  }
}

interface IData {
  users: Array<User>
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.name-of-section {
  color: black;
  margin-top: 10px;
}

:deep(.p-card) {
  width: 25%;
  margin: 25px;
  background-color: var(--bluegray-100);
  box-shadow: 3px 3px 6px var(--bluegray-500);
}

:deep(.p-card-header) {
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 15px;
}
</style>
