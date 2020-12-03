<template>
  <div>
    <!-- Vue for loop over programs in the store -->
    <div v-for="program in programs" :key="program.id">
      <!-- Only show if the dateDay in the store and the checkDate matches -->
      <div v-if="program.dateDay == checkDate.date">
        <!-- The index page in the page root.
        The class name sunday is added if the dateDay in store is equal to sunday -->
        <Nuxt :class="{ sunday: program.dateDay == checkDate.sunday }" />
        <!-- The navigationbar in the bottum of the page. 
        The class name sunday__nav is added if the dateDay in store is equal to sunday -->
        <Nav :class="{ sunday__nav: program.dateDay == checkDate.sunday }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    /* Returning the checkDate from index.js */
    checkDate() {
      return this.$store.state.checkDate;
    },
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
