<template>
  <tbody>
    <tr
      v-for="show in shows"
      :key="show.id"
      class="program__infos"
      :class="[{ announcement: show.announcement }, { 'program__infos--sunday': program.dateDay == sunday }]"
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
</template>

<script>
require('dayjs/locale/da');
var dayjs = require('dayjs');
export default {
  data() {
    return {
      today: dayjs(),
      todayDay: dayjs().locale('da').format('dddd'),
      sunday: dayjs().day(0).locale('da').format('dddd'),
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

<style>
.program__infos {
  background-color: var(--color-pixie-green);
  font-weight: var(--base-font-light-weight);
  &:nth-child(even) {
    background-color: var(--color-willow-brook);
  }
  &--sunday {
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
