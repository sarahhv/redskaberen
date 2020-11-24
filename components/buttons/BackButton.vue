<template>
  <!-- Link back one page -->
  <button class="back-button" @click="to()">
    <!-- Back arrow icon -->
    <svg-icon name="arrow-left-solid" class="back-button__sprite sprite" />
    Tilbage
  </button>
</template>

<script>
export default {
  methods: {
    to() {
      /* If currently on the association page, go back to frontpage. 
      This is added to prevent redirection to the login page.
      Else it just goes back one page */
      if (this.$router.go(-1) == '/login') {
        this.$router.go(-2);
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>
