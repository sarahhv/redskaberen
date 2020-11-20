<template>
  <main class="association-container">
    <Association />
  </main>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import { getUserFromCookie } from '@/helpers';
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      console.log('server', req.headers);
      const user = getUserFromCookie(req);
      if (!user) {
        console.log('User: ', user);
        redirect('/login');
      }
    } else {
      console.log('else');
      let user = firebase.auth().currentUser;
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
