<template>
  <section class="program-container">
    <!-- Looping over the elements in the program array -->
    <div v-for="program in programs" :key="program.id">
      <!-- Checking if the dateDay of the program is the same
       as the date i'm, checking for -->
      <div v-if="program.dateDay == checkDate">
        <h1>{{ program.title }}</h1>
        <p>{{ program.dateDay }} den {{ program.date }}</p>
      </div>
    </div>
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
