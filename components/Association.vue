<template>
  <section class="association">
    <!-- Background image in a div. I've put it in a div to make i transparent -->
    <div class="association__background-image"></div>
    <!-- Vue for loop over the users in store -->
    <div v-for="user in users" :key="user.username">
      <!-- If the userEmail is the same as the association (the email from the logged in user) -->
      <template v-if="user.userEmail == association">
        <h1 class="association__header">Hej {{ user.username }}</h1>
        <p>Herunder er oversigten over din forenings hold</p>
        <section class="association__list-container">
          <!-- Vue for loop over the programs -->
          <div v-for="program in programs" :key="program.id">
            <!-- Vue for loop over the shows in the current program -->
            <ul v-for="show in program.shows" :key="show.id">
              <!-- List that shows if the elements has the associations name in the team name -->
              <li v-if="show.team.toLowerCase().includes(user.username)" class="association__list-container__list">
                <!-- Provides a link to the lineups matching the team you click on, if the shows lineup is set to true in the store -->
                <nuxt-link v-if="show.lineup" :to="'/lineups/' + show.id" class="association__list-container__list__links">
                  {{ show.team }}</nuxt-link
                >
                <!-- If the lineup is set to false in the store, there will be no link, just plain text -->
                <p v-else class="association__list-container__list__links">{{ show.team }}</p>
              </li>
            </ul>
          </div>
        </section>
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
      /* Setting associtaion to the current users email. So the logged in users email */
      association: firebase.auth().currentUser.email,
    };
  },
  computed: {
    /* Returning the program from program.js */
    programs() {
      return this.$store.state.program.program;
    },
    /* Returning the users from program.js */
    users() {
      return this.$store.state.users.users;
    },
  },
};
</script>

<style scoped>
.association {
  &__background-image {
    background: url('../assets/img/gymUtensils.png') no-repeat;
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
    text-transform: capitalize;
  }
  &__list-container {
    margin-top: 8%;
    &__list {
      min-height: 8vh;
      margin: 5% 0;
      padding: 2%;
      display: flex;
      align-items: center;
      list-style: none;
      background-color: ghostwhite;
      box-shadow: var(--box-shadow);
      border-radius: 5%;
      &__links {
        color: black;
        text-decoration: none;
      }
    }
  }
}
</style>
