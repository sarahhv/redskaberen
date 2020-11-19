<template>
  <section class="lineup-container">
    <BackButtons />
    <div v-for="program in programs" :key="program.id">
      <div v-if="program.dateDay == checkDate">
        <!-- Div containing the loop over the programs -->
        <div v-for="lineup in program.shows" :key="lineup.id">
          <!-- Div containing the if statement - stating to only show the program id matching the clicked team  -->
          <div v-if="$route.params.id == lineup.id" class="lineups">
            <h1 class="lineups__title">Redskabsopstilling for</h1>
            <!-- The teamname of the clicked team from the program -->
            <p class="lineups__program-details">{{ lineup.team }}</p>
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
require('dayjs/locale/da');
var dayjs = require('dayjs');
export default {
  data() {
    return {
      /* I've created a chekDate to enable prototyping check. 
      In the real prototype it would check on the current date,
      and compare it to the date of the program  */
      checkDate: dayjs('2020-11-21').locale('da').format('dddd'),
    };
  },
  computed: {
    programs() {
      return this.$store.state.program.program;
    },
  },
};
</script>

<style scoped>
.lineups {
  height: 96vh;
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
  }
}
</style>
