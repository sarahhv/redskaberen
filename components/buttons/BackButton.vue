<template>
  <!-- Link back one page -->
  <button class="back-button" @click="to()">
    <svg-icon name="arrow-left-solid" class="back-button__sprite sprite" />
    Tilbage
  </button>
</template>

<script>
export default {
  methods: {
    to() {
      if (this.$route.path == '/association') {
        this.$router.push({ path: '/' });
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>
