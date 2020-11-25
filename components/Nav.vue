<template>
  <nav class="navbar">
    <!-- Buttons from the button folder -->
    <!-- Back button -->
    <BackButton class="navbar__buttons" />
    <!-- Button to the program/frontpage -->
    <ProgramButton class="navbar__buttons" />
    <!-- Button to the association page. 
    Goes to logIn if you're not logged in -->
    <AssociationButton class="navbar__buttons" />
    <!-- Button that is either login or logout depending on the user status -->
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
  &__buttons:focus {
    outline: none;
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
