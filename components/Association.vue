<template>
  <section class="association">
    <LoginButton />
    <!-- Background image in a div -->
    <div class="association__background-image"></div>
    <h1 class="association__header">Hej "foreningsnavn her"</h1>
    <p>Herunder er oversigten over din forenings hold</p>
    <div v-for="program in programs" :key="program.id">
      <ul v-for="show in program.shows" :key="show.id">
        <!-- List that shows the elements which has the associations name in the team name -->
        <li v-if="show.team.toLowerCase().includes('hei')" class="association__list">
          <nuxt-link :to="'/lineups/' + show.id" class="association__list__links"> {{ show.team }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { getUserFromCookie } from '@/helpers';
require('dayjs/locale/da');
var dayjs = require('dayjs');
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req);
      if (!user) {
        console.log(user);
        redirect('/login');
      }
    } else {
      let user = firebase.auth().currentUser;
      if (!user) {
        redirect('/login');
      }
    }
  },
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
