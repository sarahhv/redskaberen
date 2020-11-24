<template>
  <main>
    <section class="login">
      <h1>Login</h1>
      <form class="login__form" @submit.prevent="clicked()">
        <input v-model="email" type="text" placeholder="Email" class="login__form__input" />
        <input v-model="password" type="password" placeholder="Password" class="login__form__input" />
        <button class="login__form__btn">Login</button>
      </form>
      <p v-if="error" class="login__error">{{ error.message }}</p>
    </section>
  </main>
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

<style scoped>
.login {
  width: 50vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__form {
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
  &__error {
    color: red;
  }
}
</style>
