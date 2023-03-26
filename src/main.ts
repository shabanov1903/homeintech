import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';

import "./assets/sass/styles.scss"

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.directive('tooltip', Tooltip);

app.mount('#app')
