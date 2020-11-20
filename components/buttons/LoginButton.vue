<template>
  <aside class="logButton">
    <nuxt-link v-if="!loggedIn" to="/login" class="logButton__log-link">
      <svg-icon name="user-circle-solid" class="logButton__log-link__sprite" />
    </nuxt-link>
    <nuxt-link v-else to="/" class="logButton__log-link logout">
      <svg-icon name="sign-out-alt-solid" class="logButton__log-link__sprite" @click="logout()"
    /></nuxt-link>
  </aside>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      /* eslint-disable */
      /* Everytime a user logs in or out this will be fired  */
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log('logged In');
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => {
              Cookies.set('access_token', token);
            });
          this.loggedIn = true;
        } else {
          Cookies.remove('access_token');
          this.loggedIn = false;
          console.log('signed out', 'loggedIn: ' + this.loggedIn)
        }
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>

<style scoped>
.logButton__log-link {
  position: absolute;
  right: 3vw;
  width: 8vw;
  height: 10vh;
  color: #b0dce7;
  &__sprite {
    width: 100%;
    height: 100%;
  }
}
</style>
