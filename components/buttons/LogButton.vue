<template>
  <button class="log-button">
    <nuxt-link v-if="!loggedIn" to="/login" class="log-button__log-link login link">
      <svg-icon name="sign-in-alt-solid" class="log-button__log-link__sprite sprite" />
      Log ind
    </nuxt-link>
    <nuxt-link v-else to="/" class="log-button__log-link logout link">
      <svg-icon name="sign-out-alt-solid" class="log-button__log-link__sprite sprite" @click="logout()" />Log ud</nuxt-link
    >
  </button>
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
      /* Everytime a user logs in or out this will be fired  */
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then((token) => {
              Cookies.set('access_token', token);
            });
          this.loggedIn = true;
          console.log('logged In');
        } else {
          Cookies.remove('access_token');
          this.loggedIn = false;
          console.log('logged out');
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
