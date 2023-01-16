<template>
<div class="content-item-container">
  <div><i class="pi pi-check-square"></i></div>
  <div>{{text}}</div>
</div>
</template>

<script lang="ts">


export default {
  name: 'ProductionItem',
  props: {
    text: String
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';

.content-item-container {
  display: flex;
  flex-direction: row;
  margin: 15px;
  width: 100%;

  div:first-child {
    padding: 0px 10px;
    color: var(--blue-800);
  }
  
  div:last-child {
    text-align: start;
    font-weight: bold;
    font-size: 1.2em;
  }
}
</style>
