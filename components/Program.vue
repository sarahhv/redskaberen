<template>
  <section class="program-container">
    <!-- Should be fetched data both h1 and p tag -->
    <h1>Børnedag i Vejlby-Risskov Hallen, Aarhus</h1>
    <p>{{ program.dateDay }} den {{ program.date }}</p>
    <!-- Table for the show-program that contains a row with headers and a row with a loop of the programData -->
    <table class="program">
      <thead>
        <tr id="e" class="program__headers" :class="{ 'program__headers--saturday': program.dateDay == saturday }">
          <th class="program__headers__header time">Tid</th>
          <th class="program__headers__header team">Hold</th>
          <th class="program__headers__header instructors">Instruktører</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="show in shows"
          :key="show.id"
          class="program__infos"
          :class="[{ announcement: show.announcement }, { 'program__infos--saturday': program.dateDay == saturday }]"
        >
          <!-- Show time - dansk: Opvisningstiden -->
          <td class="program__infos__info time">{{ show.time }}</td>
          <!-- Show team - dansk: Opvisningsholdet -->
          <td v-if="show.lineup" class="program__infos__info team">
            <nuxt-link :to="'/lineups/' + show.id" class="program__infos__info__links">{{ show.team }}</nuxt-link>
          </td>
          <td v-else class="program__infos__info team">{{ show.team }}</td>
          <!-- Show team instructors - dansk: Opvisningsholdets instruktører -->
          <td class="program__infos__info instructors">{{ show.instructors }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
require('dayjs/locale/da');
var dayjs = require('dayjs');
export default {
  data() {
    return {
      today: dayjs(),
      todayDay: dayjs().locale('da').format('dddd'),
      programColor: { backgroundColor: 'red' },
      saturday: dayjs().day(7).locale('da').format('dddd'),
    };
  },
  computed: {
    program() {
      return this.$store.state.program.program;
    },
    shows() {
      return this.$store.state.program.program.shows;
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
    &--saturday {
      background-color: var(--color-amaranth);
    }
  }
  &__infos {
    background-color: var(--color-pixie-green);
    font-weight: var(--base-font-light-weight);
    &:nth-child(even) {
      background-color: var(--color-willow-brook);
    }
    &--saturday {
      background-color: var(--color-wewak);
      &:nth-child(even) {
        background-color: var(--color-azalea);
      }
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
