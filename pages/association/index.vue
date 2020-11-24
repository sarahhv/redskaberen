<template>
  <main class="association-container">
    <!-- The association component reference -->
    <Association />
  </main>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { getUserFromCookie } from '@/helpers';
export default {
  /* Asyncron data, that only shows when it is loaded */
  asyncData({ req, redirect }) {
    /* If the server is up */
    if (process.server) {
      console.log('server', req.headers);
      const user = getUserFromCookie(req);
      /* If you're not logged in and goes to the association page be redirected to the login page */
      if (!user) {
        console.log('User: ', user);
        redirect('/login');
      }
    } /* If the server isn't up yet */ else {
      console.log('else process.server');
      let user = firebase.auth().currentUser;
      /* If you're not logged in and goes to the association page be redirected to the login page */
      if (!user) {
        redirect('/login');
      }
    }
  },
};
</script>

<style scoped>
.association-container {
  background: none;
}
</style>
