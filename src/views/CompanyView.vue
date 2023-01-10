<template>
  <div class="main-container content-container">
    <div class="text">
      <p>HomeIntech</p>
      <p>- это инжиниринговая компания, предлагающая комплекс услуг полного цикла по проектированию, поставке, монтажу, пуско-наладке, автоматизации и диспетчеризации внутридомовых инженерных сетей зданий, включая системы электроснабжения, вентиляции, кондиционирования, пожарной сигнализации,  видеонаблюдения и мультимедиа систем, а также имеет собственный сборочный цех щитового оборудования.</p>
    </div>
    <img src="@/assets/images/engineer.png" alt="Engineer.png">
  </div>
</template>

<script lang="ts">

export default {
  name: 'CompanyView'
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/mixins.scss';
  .content-container {
    display: flex;
    flex-flow: row wrap;

    @include mobile-only {
      flex-direction: column;
    }
    margin: 10px;

    .text {
      width: 100%;
      @include desktop-only {
        width: 50%;
      }
      padding: 0 5%;

      p:first-child {
        color: var(--blue-700);
        font-size: 3em;
        font-weight: bold;
        text-align: center;
      }

      p:last-child {
        font-size: 1.2em;
        text-align: justify;
      }
    }

    img {
      width: 100%;
      @include desktop-only {
        width: 50%;
      }
      height: max-content;
      margin: auto;
      display: block;
      border-radius: 5px;
      filter: drop-shadow(6px 4px 3px var(--gray-500));
    }
  }
</style>
