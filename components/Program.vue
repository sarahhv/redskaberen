<template>
  <section class="program-container">
    <!-- Should be fetched data both h1 and p tag -->
    <h1>Børnedag i Vejlby-Risskov Hallen, Aarhus</h1>
    <p>Lørdag den 09 marts 2019</p>
    <!-- Table for the show-program that contains a row with headers and a row with a loop of the programData -->
    <table class="program">
      <tr class="program__headers">
        <th class="program__headers__header time">Tid</th>
        <th class="program__headers__header team">Hold</th>
        <th class="program__headers__header instructors">Instruktører</th>
      </tr>
      <tr v-for="plan in program" :key="plan.id" class="program__infos" :class="{ announcement: plan.announcement }">
        <!-- Show time - dansk: Opvisningstiden -->
        <td class="program__infos__info time">{{ plan.time }}</td>
        <!-- Show team - dansk: Opvisningsholdet -->
        <td v-if="plan.lineup" class="program__infos__info team">
          <nuxt-link :to="'/lineups/' + plan.id" class="program__infos__info__links">{{ plan.team }}</nuxt-link>
        </td>
        <td v-else class="program__infos__info team">{{ plan.team }}</td>
        <!-- Show team instructors - dansk: Opvisningsholdets instruktører -->
        <td class="program__infos__info instructors">{{ plan.instructors }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  computed: {
    program() {
      return this.$store.state.program.program;
    },
  },
};
</script>

<style scoped>
.program-container {
  text-align: left;
}

h1 {
  border-bottom: 2px solid black;
}

p {
  padding: 3% 0;
  background-color: white;
}

.program {
  &__headers {
    background-color: var(--color-malachite);
    &__header {
      padding: 1%;
    }
  }
  &__infos {
    background-color: var(--color-pixie-green);
    font-weight: var(--base-font-light-weight);
    &:nth-child(odd) {
      background-color: var(--color-willow-brook);
    }
    &__info {
      padding: 1%;
      &__links {
        text-decoration: none;
        color: black;
      }
    }
  }
}

.time {
  width: 10%;
}

.team,
.instructors {
  width: 45%;
}

.announcement {
  font-weight: var(--heading-font-weight);
}
</style>
