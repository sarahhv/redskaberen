<template>
  <!-- If you're currently not logged in, a login icon will be shown 
  and you will be redirected to the login page -->
  <nuxt-link v-if="!loggedIn" to="/login" class="log-button__log-link login link">
    <svg-icon name="sign-in-alt-solid" class="log-button__log-link__sprite sprite" />
    Log ind
  </nuxt-link>
  <!-- If you're currently logged in, a logout icon will be shown
  and you will be redirected to the frontpage (programs) -->
  <nuxt-link v-else to="/" class="log-button__log-link logout link">
    <!-- When clicking this icon, the method logout is called -->
    <svg-icon name="sign-out-alt-solid" class="log-button__log-link__sprite sprite" @click="logout()" />
    Log ud
  </nuxt-link>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      /* Setting the loggedIn state to false. 
      Meaning per default you're logged out */
      loggedIn: false,
    };
  },
  mounted() {
    /* When mounted run the setupFirebase method */
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      /* Everytime a user logs in or out this will be fired  */
      firebase.auth().onAuthStateChanged((user) => {
        /* If a user logs in, get the IdToken and add it to Cookies */
        if (user) {
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then((token) => {
              Cookies.set('access_token', token);
            });
          /* Set the logged in status to true */
          this.loggedIn = true;
          console.log('logged In');
        } else {
          /* If the user logs out remove the token from cookies */
          Cookies.remove('access_token');
          /* Set the state og loggedIn to false */
          this.loggedIn = false;
          console.log('logged out');
        }
      });
    },
    /* Logout from the firebase user and redirect to the front page */
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
