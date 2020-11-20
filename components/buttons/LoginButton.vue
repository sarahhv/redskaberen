<template>
  <aside class="logButton">
    <nuxt-link v-if="!loggedIn" to="/login" class="logButton__log-link login">
      <svg-icon name="sign-in-alt-solid" class="logButton__log-link__sprite" />
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

<style scoped>
.logButton__log-link {
  position: absolute;
  right: 7vw;
  width: 8vw;
  height: 10vh;
  color: #b0dce7;
  &__sprite {
    width: 100%;
    height: 100%;
  }
}

.login {
  color: var(--color-malachite);
}

.logout {
  color: #eb1439;
}
</style>
