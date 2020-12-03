<template>
  <section class="lineup-container">
    <!-- Vue for loop over the programs in the store -->
    <div v-for="program in programs" :key="program.id">
      <!-- Show if the dateDay in the store is equal to the checkdate -->
      <div v-if="program.dateDay == checkDate.date">
        <!-- Vue for loop over the lineups in the program show from the store -->
        <div v-for="lineup in program.shows" :key="lineup.id">
          <!-- Show if the program id matches the clicked team  -->
          <div v-if="$route.params.id == lineup.id" class="lineups">
            <h1 class="lineups__title">Redskabsopstilling for</h1>
            <!-- The teamname of the clicked team from the program -->
            <p class="lineups__program-details">{{ lineup.team }}</p>
            <!-- The performance time of the clicked team from the program -->
            <p class="lineups__program-details">{{ lineup.time }}</p>
            <!-- Image of the lineup -->
            <img :src="require(`../assets/img/${lineup.lineupImg}.png`)" :alt="'Lineup' + lineup.team" class="lineups__img" />
          </div>
        </div>
      </div>
    </div>
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
.lineups {
  height: 84vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  &__program-details {
    background: #ffffffcc;
    display: inline-flex;
    margin: 0 auto;
  }
  &__img {
    width: 100%;
    margin: auto;
    @media (--viewport-ms-max) {
      max-height: 85vh;
    }
  }
}
</style>
