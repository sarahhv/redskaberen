<template>
  <section class="program-container">
    <!-- Vue for loop over the elements in the program array in the store -->
    <div v-for="program in programs" :key="program.id">
      <!-- Show it the dateDay in the store is equal to the checkDate -->
      <div v-if="program.dateDay == checkDate">
        <!-- The current dates programs title -->
        <h1>{{ program.title }}</h1>
        <!-- The current dates programs full date -->
        <p>{{ program.dateDay }} den {{ program.date }}</p>
      </div>
    </div>
    <!-- The table containing the actual program -->
    <ShowsTable />
  </section>
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
      checkDate: dayjs('2020-11-22').locale('da').format('dddd'),
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
h1 {
  border-bottom: 2px solid black;
  width: 95%;
}

p {
  padding: 3% 0;
  background-color: white;
  text-transform: capitalize;
}
</style>
