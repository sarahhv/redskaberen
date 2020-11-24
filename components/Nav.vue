<template>
  <nav class="navbar">
    <BackButton class="navbar__buttons" />
    <ProgramButton class="navbar__buttons" />
    <AssociationButton class="navbar__buttons" />
    <LogButton class="navbar__buttons" />
  </nav>
</template>

<style>
.navbar {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 7vh;
  background-color: var(--color-de-york);
  box-shadow: var(--box-shadow);
  &__buttons {
    width: 20vw;
    height: 75%;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 0.7em;
    font-weight: var(--heading-font-weight);
  }
  .link {
    text-decoration: none;
    color: white;
  }
  .sprite {
    width: 100%;
    height: 60%;
    color: white;
  }
}
</style>
