<template>
  <section class="lineup-container">
    <nuxt-link to="/" class="lineup-container__back">&#10132;</nuxt-link>
    <!-- Div containing the loop over the programs -->
    <div v-for="pl in programLineup" :key="pl.id">
      <!-- Div containing the if statement - stating to only show the program id matching the clicked team  -->
      <div v-if="$route.params.id == pl.id" class="lineups">
        <h1 class="lineups__title">Redskabsopstilling for</h1>
        <!-- The teamname of the clicked team from the program -->
        <p class="lineups__program-details">{{ pl.team }}</p>
        <p class="lineups__program-details">{{ pl.time }}</p>
        <!-- Image of the lineup -->
        <img :src="require(`../assets/img/${pl.lineupImg}.png`)" :alt="'Lineup' + pl.team" class="lineups__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    programLineup() {
      return this.$store.state.program.program;
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
