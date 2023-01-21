<template>
  <div>
    <div class="menu">
      <TabMenu v-if="desktopFlag" :model="items" @tab-change="tabChange($event)" class="tab-menu-desktop"/>
      <Accordion v-else>
        <AccordionTab header="Меню">
          <TabMenu :model="items" @tab-change="tabChange($event)" class="tab-menu-mobile"/>
        </AccordionTab>
      </Accordion>
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
      <p>Сайт разработал: <a href="https://github.com/shabanov1903" target="_blank">Danil Shabanov (shabanov1903@gmail.com)</a></p>
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
        {label: 'Компания', icon: 'pi pi-fw pi-home', href: 'id-company'},
        {label: 'Услуги', icon: 'pi pi-fw pi-shopping-bag', href: 'id-services'},
        {label: 'Технологии', icon: 'pi pi-fw pi-database', href: 'id-technologies'},
        {label: 'Калькулятор', icon: 'pi pi-fw pi-calculator', href: 'id-calculator'},
        {label: 'Производство', icon: 'pi pi-fw pi-server', href: 'id-production'},
        {label: 'Контакты', icon: 'pi pi-fw pi-phone', href: 'id-contacts'}
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
    tabChange: function(event: TabMenuChangeEvent) {
      const id = '#'.concat(this.items[event.index].href);
      const scrollIntoViewWithOffset = (selector, offset) => {
        window.scrollTo({
          behavior: 'smooth',
          top:
            document.querySelector(selector)?.getBoundingClientRect().top -
            document.body?.getBoundingClientRect().top -
            offset,
        })
      }
      scrollIntoViewWithOffset(id, 48);
    },
    resize: function(event: UIEvent) {
      const target = event.target;
      this.desktopFlag = (target as Window).innerWidth > this.desktopSize;
    },
  },
}
</script>

<style scoped lang="scss">
  .tab-menu-mobile ::v-deep() {
    .p-tabmenu-nav {
      flex-direction: column;
    }
    .p-tabmenu-ink-bar {
      display: none;
    }
    .p-tabmenu-nav {
      border: none;
    }
  }

  :deep(.p-accordion-content) {
    padding: unset;
  }
  
  :deep(.p-accordion-header-link) {
    padding: 0.75rem 1rem !important;
  }
  
  :deep(.p-menuitem-link) {
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
  }

  .menu {
    position: sticky;
    top: 0;
    z-index: 1;
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
