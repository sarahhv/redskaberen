<template>
  <!-- Link back one page -->
  <button class="back" @click="to()">
    <svg-icon name="arrow-circle-left-solid" class="back__img" />
  </button>
</template>

<script>
export default {
  methods: {
    to() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.back {
  display: flex;
  align-items: center;
  position: absolute;
  left: 3vw;
  width: 7vw;
  height: 5vh;
  border: none;
  background: none;
  &__img {
    background-color: white;
    border-radius: 50%;
  }
}
</style>
