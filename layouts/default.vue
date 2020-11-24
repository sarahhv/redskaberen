<template>
  <div>
    <!-- Vue for loop over programs in the store -->
    <div v-for="program in programs" :key="program.id">
      <!-- Only show if the dateDay in the store and the checkDate matches -->
      <div v-if="program.dateDay == checkDate">
        <!-- The index page in the page root.
        The class name sunday is added if the dateDay in store is equal to sunday -->
        <Nuxt :class="{ sunday: program.dateDay == sunday }" />
        <!-- The navigationbar in the bottum of the page. 
        The class name sunday__nav is added if the dateDay in store is equal to sunday -->
        <Nav :class="{ sunday__nav: program.dateDay == sunday }" />
      </div>
    </div>
  </div>
</template>

<script>
require('dayjs/locale/da');
var dayjs = require('dayjs');
export default {
  data() {
    return {
      /* I've created a chekDate to enable prototyping check. 
      In the real prototype it would check on the current date,
      and compare it to the date of the program  */
      checkDate: dayjs('2020-11-21').locale('da').format('dddd'),
      /* This checks to see if it's sunday */
      sunday: dayjs().day(0).locale('da').format('dddd'),
    };
  },
  computed: {
    /* Returning the program from program.js */
    programs() {
      return this.$store.state.program.program;
    },
  },
};
</script>

<style scoped>
.sunday {
  background-color: var(--color-amaranth);
  &__nav {
    background-color: var(--color-apricot);
  }
}
</style>
