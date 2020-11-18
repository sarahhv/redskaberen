<template>
  <section class="lineup-container">
    <nuxt-link to="/" class="lineup-container__back">&#10132;</nuxt-link>
    <!-- Div containing the loop over the programs -->
    <div v-for="lineup in lineups" :key="lineup.id">
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
  </section>
</template>

<script>
export default {
  computed: {
    lineups() {
      return this.$store.state.program.program.shows;
    },
  },
};
</script>

<style scoped>
.lineup-container {
  &__back {
    transform: rotate(180deg);
    position: absolute;
    font-size: 3em;
    color: black;
    text-decoration: none;
  }
}
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
