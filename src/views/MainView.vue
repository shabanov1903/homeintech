<template>
  <div>
    <div class="menu">
      <div class="menu-company-name">HomeIntecH</div>
      <div class="menu-items">
        <template v-for="item in items">
          <i class="menu-items-component" :class="item.icon" @click="tabChange(item)"></i>
        </template>
      </div>
    </div>
    <div class="content">
      <CompanyView id="id-company"></CompanyView>
      <ServicesView id="id-services"></ServicesView>
      <TechnologiesView id="id-technologies"></TechnologiesView>
      <CalculatorView id="id-calculator"></CalculatorView>
      <ProductionView id="id-production"></ProductionView>
      <ContactsView id="id-contacts"></ContactsView>
    </div>
    <PhoneButton></PhoneButton>
  </div>
  <footer>
    <div>
      <p>Сайт разработал: <a href="https://github.com/shabanov1903" target="_blank">Danil Shabanov
          (shabanov1903@gmail.com)</a></p>
    </div>
  </footer>
</template>

<script lang="ts">
import TabMenu, { TabMenuChangeEvent } from 'primevue/tabmenu';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import CompanyView from './CompanyView.vue';
import ServicesView from './ServicesView.vue';
import TechnologiesView from './TechnologiesView.vue';
import CalculatorView from './CalculatorView.vue';
import ProductionView from './ProductionView.vue';
import ContactsView from './ContactsView.vue';
import PhoneButton from '../components/PhoneButton.vue';

export default {
  name: 'MainView',
  components: {
    TabMenu,
    Accordion,
    AccordionTab,
    CompanyView,
    TechnologiesView,
    ServicesView,
    CalculatorView,
    ProductionView,
    ContactsView,
    PhoneButton
  },
  data() {
    return {
      items: [
        { label: 'Компания', icon: 'pi pi-fw pi-home', href: 'id-company' },
        { label: 'Услуги', icon: 'pi pi-fw pi-shopping-bag', href: 'id-services' },
        { label: 'Технологии', icon: 'pi pi-fw pi-database', href: 'id-technologies' },
        { label: 'Калькулятор', icon: 'pi pi-fw pi-calculator', href: 'id-calculator' },
        { label: 'Производство', icon: 'pi pi-fw pi-server', href: 'id-production' },
        { label: 'Контакты', icon: 'pi pi-fw pi-phone', href: 'id-contacts' }
      ],
      desktopSize: 768,
      desktopFlag: false
    }
  },
  created() {
    window.addEventListener('resize', this.resize);
    this.desktopFlag = window.innerWidth > this.desktopSize;
  },
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    tabChange: function (item: any) {
      const id = '#'.concat(item.href);
      document.querySelector(id).scrollIntoView({behavior: "smooth"});
    },
    resize: function (event: UIEvent) {
      const target = event.target;
      this.desktopFlag = (target as Window).innerWidth > this.desktopSize;
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.menu {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 100;
  width: 100%;
  opacity: .65;
  background-color: white;
  height: 50px;
  
  &:hover {
    opacity: .75;
  }

  &-company-name {
    padding: 0 30px;
    font-size: 1.75em;
    font-weight: 600;
    color: get-color(button);
  }

  &-items {
    padding: 0 25px;

    &-component {
      font-size: 1.25em;
      cursor: pointer;
      padding: 0 30px;
      transition: all .25s ease-in-out;

      &:hover {
        transform: scale(1.25);
        color: get-color(button);
      }
    }
  }
}

footer {
  background-color: var(--bluegray-900);

  div {
    text-align: right;
    font-size: 0.75em;
    padding: 4px;

    p {
      margin: 2px;
      color: white;

      a {
        color: white;
      }
    }
  }
}
</style>
