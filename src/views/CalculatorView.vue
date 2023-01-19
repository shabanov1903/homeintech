<template>
  <div class="main-container">
    <div class="name-of-section">Калькулятор</div>

    <div class="inputgroup-container">
      <div class="p-inputgroup" v-for="paragraph in paragraphs">
        <Transition>
          <div class="input-name" v-if="paragraph.value !== ''">{{paragraph.placeholder}}</div>
        </Transition>
        <span class="p-inputgroup-addon">
            <i v-bind:class="paragraph.class"></i>
        </span>
        <InputText v-bind:placeholder="paragraph.placeholder" v-model="paragraph.value" />
      </div>
    </div>

    <div class="full-cost-container">
      Итого: <span>{{getFullCost}}</span> руб.
    </div>
  </div>
</template>

<script lang="ts">
import * as _is from "../../node_modules/is_js";
import InputText from 'primevue/inputtext';

export default {
  name: 'CalculatorView',
  components: {
    InputText
  },
  data() {
    return {
      paragraphs: [
        {id: 0, placeholder: 'Площадь объекта', class: 'pi pi-home', value: '', coefficient: 1000},
        {id: 1, placeholder: 'Количество этажей', class: 'pi pi-building', value: '', coefficient: 20000},
        {id: 2, placeholder: 'Количество жилых комнат', class: 'pi pi-moon', value: '', coefficient: 5000},
        {id: 3, placeholder: 'Количество ванных/санузлов', class: 'pi pi-ticket', value: '', coefficient: 10000},
        {id: 4, placeholder: 'Количество кухонь', class: 'pi pi-table', value: '', coefficient: 10000},
        {id: 5, placeholder: 'Количество иных помещений', class: 'pi pi-ellipsis-v', value: '', coefficient: 5000},
      ]
    }
  },
  methods: {
    getValue(paragraph: any): number {
      const value = Number(paragraph.value.replace(',', '.'));
      if(_is.number(value)) {
        return Number(value) * paragraph.coefficient;
      }

      return 0;
    }
  },
  computed: {
    getFullCost(): number {

      let cost = 0;

      this.paragraphs.forEach(paragraph => {
        cost += this.getValue(paragraph)
      })
      
      return cost;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.main-container {
  background-image: url('@/assets/images/bg_calculator.png');
  background-size: 100%;
}
.name-of-section {
  color: white;
}

.inputgroup-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.full-cost-container {
  font-size: 2em;
  margin: {
    top: 20px;
    bottom: 30px;
  }
  color: white;
}

.input-name {
  position: absolute;
  top: -25px;
  color: white;
}

.p-inputgroup {
  width: 50%;
  margin: 15px;
  position: relative;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
