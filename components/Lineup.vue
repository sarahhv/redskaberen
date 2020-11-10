<template>
  <section class="lineup-container">
    <nuxt-link to="/" class="lineup-container__back">&#10132;</nuxt-link>
    <!-- Div containing the loop over Lineups -->
    <div v-for="lineup in lineups" :key="lineup.id">
      <!-- Div containing the if statement - stating to only show the lineup matching the clicked team  -->
      <div v-if="$route.params.id == lineup.programId" class="lineup-container__lineup">
        <!-- Header 1 with title description and the title of the team the line up is for -->
        <h1 class="lineup-container__lineup__title">
          Redskabsopstilling for <br />
          HoldNr {{ $route.params.id }}
        </h1>
        <!-- Image of the lineup -->
        <img :src="lineup.img" :alt="'Lineup' + lineup.id" class="lineup-container__lineup__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    lineups() {
      return this.$store.state.lineups.lineups;
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
  &__lineup {
    height: 96vh;
    display: flex;
    flex-flow: wrap;
    align-items: baseline;
    justify-content: center;
    &__title {
      text-align: center;
    }
    &__img {
      width: 100%;
    }
  }
}
</style>
