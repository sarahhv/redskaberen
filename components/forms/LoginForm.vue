<template>
  <div>
    <form class="login-form" @submit.prevent="clicked()">
      <input v-model="email" type="text" placeholder="Email" class="login-form__input" />
      <input v-model="password" type="password" placeholder="Password" class="login-form__input" />
      <button class="login-form__btn">Login</button>
    </form>
    <p v-if="error" class="login-error">{{ error.message }}</p>
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

<style>
.login-form {
  &__input {
    width: 80%;
    height: 5vh;
    margin: 1vh 0;
    padding: 2%;
    font-size: 0.8em;
    border: none;
    border-radius: 5%;
    box-shadow: var(--box-shadow);
  }
  &__btn {
    width: 50%;
    padding: 2%;
    font-size: 0.8em;
    border-radius: 5%;
    border: none;
    background-color: #0eb159;
    color: white;
  }
}
.login-error {
  color: red;
}
</style>
