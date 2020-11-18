<template>
  <section class="program-container">
    <!-- Should be fetched data both h1 and p tag -->
    <h1>Børnedag i Vejlby-Risskov Hallen, Aarhus</h1>
    <p>{{ todayDay }} den {{ todayDate }}</p>
    <!-- Table for the show-program that contains a row with headers and a row with a loop of the programData -->
    <table class="program">
      <thead>
        <tr class="program__headers">
          <th class="program__headers__header time">Tid</th>
          <th class="program__headers__header team">Hold</th>
          <th class="program__headers__header instructors">Instruktører</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  </section>
</template>

<script>
require('dayjs/locale/da');
var dayjs = require('dayjs');
var today = dayjs();
export default {
  data() {
    return {
      todayDay: today.locale('da').format('dddd'),
      todayDate: today.format('D MMMM YYYY'),
    };
  },
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
  text-transform: capitalize;
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
    &:nth-child(even) {
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
