<template>
  <section class="program-container">
    <!-- Vue for loop over the elements in the program array in the store -->
    <div v-for="program in programs" :key="program.id">
      <!-- Show it the dateDay in the store is equal to the checkDate -->
      <div v-if="program.dateDay == checkDate.date">
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
