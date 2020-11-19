<template>
  <aside class="profile">
    <nuxt-link to="/association" class="association-link">
      <svg-icon name="user-circle-solid" class="association-link__img" />
    </nuxt-link>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.association-link {
  position: absolute;
  right: 3vw;
  width: 8vw;
  height: 10vh;
  color: #b0dce7;
  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>
