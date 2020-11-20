<template>
  <div class="login">
    <h3>Login</h3>
    <form @submit.prevent="clicked">
      <div class="login">
        <input v-model="email" type="text" placeholder="Email" />
      </div>
      <div class="password">
        <input v-model="password" type="password" placeholder="Password" />
      </div>
      <button>Login</button>
    </form>
    <div v-if="error" class="error">{{ error.message }}</div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    clicked() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data);
          this.$router.push('/association');
        })
        .catch((error) => (this.error = error));
    },
  },
};
</script>

<style></style>
