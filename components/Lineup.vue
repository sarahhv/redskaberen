<template>
  <article class="lineup">
    <div v-for="lineup in lineups" :key="lineup.id">
      <div v-if="$route.params.id == lineup.programId">
        <h1>Redskabsopstilling for = {{ $route.params.id }}</h1>
        <p>The program.id is the same as lineup.programId</p>
        <img :src="lineup.img" alt="Lineup" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  computed: {
    lineups() {
      return this.$store.state.lineups.lineups;
    },
  },
  mounted() {
    this.$store.dispatch('lineups');
  },
};
</script>

<style scoped></style>
