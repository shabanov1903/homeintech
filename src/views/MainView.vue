<template>
  <div>
    <TabMenu v-if="desktopFlag" :model="items" @tab-change="tabChange($event)" class="tab-menu-desktop"/>
    <Accordion v-else>
      <AccordionTab header="Меню">
        <TabMenu :model="items" @tab-change="tabChange($event)" class="tab-menu-mobile"/>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script lang="ts">
import TabMenu, { TabMenuChangeEvent } from 'primevue/tabmenu';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

export default {
  name: 'MainView',
  components: {
    TabMenu,
    Accordion,
    AccordionTab
  },
  data() {
    return {
      items: [
        {label: 'Компания', icon: 'pi pi-fw pi-home'},
        {label: 'Проекты', icon: 'pi pi-fw pi-database'},
        {label: 'Услуги', icon: 'pi pi-fw pi-slack'},
        {label: 'Калькулятор', icon: 'pi pi-fw pi-calculator'},
        {label: 'Производство', icon: 'pi pi-fw pi-server'},
        {label: 'Команда', icon: 'pi pi-fw pi-users'},
        {label: 'Контакты', icon: 'pi pi-fw pi-phone'}
      ],
      desktopSize: 768,
      desktopFlag: false
    }
  },
  created() {
    window.addEventListener('resize', this.resize);
  },
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    tabChange: function(event: TabMenuChangeEvent) {
      console.log(event)
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
</style>
