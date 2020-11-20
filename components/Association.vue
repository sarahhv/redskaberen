<template>
  <section class="association">
    <nuxt-link to="/">Forsiden</nuxt-link>
    <!-- Background image in a div -->
    <div class="association__background-image"></div>
    <div v-for="user in users" :key="user.username">
      <template v-if="user.userEmail == association">
        <h1 class="association__header">Hej {{ user.username }}</h1>
        <p>Herunder er oversigten over din forenings hold</p>
        <div v-for="program in programs" :key="program.id">
          <ul v-for="show in program.shows" :key="show.id">
            <!-- List that shows the elements which has the associations name in the team name -->
            <li v-if="show.team.toLowerCase().includes(user.username)" class="association__list">
              <nuxt-link v-if="show.lineup" :to="'/lineups/' + show.id" class="association__list__links"> {{ show.team }}</nuxt-link>
              <p v-else class="association__list__links">{{ show.team }}</p>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  data() {
    return {
      association: firebase.auth().currentUser.email,
    };
  },
  computed: {
    /* Returning the program from program.js */
    programs() {
      return this.$store.state.program.program;
    },
    users() {
      return this.$store.state.program.users;
    },
  },
};
</script>

<style scoped>
.association {
  &__background-image {
    background: url('../assets/img/gymUtensils.jpg') no-repeat;
    background-size: 100vw 100vh;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.05;
  }
  &__header {
    text-align: center;
  }
  &__list {
    margin: 3% 0;
    padding: 2%;
    list-style: none;
    background-color: ghostwhite;
    box-shadow: 0px 0px 12px 9px #00000036;
    &__links {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
