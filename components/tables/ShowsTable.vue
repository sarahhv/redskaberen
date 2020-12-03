<template>
  <div>
    <!-- Vue for loop over elements in programs() -->
    <div v-for="program in programs" :key="program.id">
      <!-- Table for the show-program. 
      Is only shown if the programs date is equal to the checkDate I've made -->
      <table v-if="program.dateDay == checkDate.date" class="program">
        <!-- Table headers -->
        <thead>
          <!-- If the stores dateDay is sunday add --sunday to class. 
          This will add the red color -->
          <tr class="program__headers" :class="{ 'program__headers--sunday': program.dateDay == checkDate.sunday }">
            <th class="program__headers__header time">Tid</th>
            <th class="program__headers__header team">Hold</th>
            <th class="program__headers__header instructors">Instruktører</th>
          </tr>
        </thead>
        <!-- Table body containing the shows -->
        <tbody>
          <!-- Table row with a Vue for loop over the shows in the current program.
          Adds a class named announcement if the announcement in the store is true.
          Adds --sunday to class if the stores dateDay is equal to sunday -->
          <tr
            v-for="show in program.shows"
            :key="show.id"
            class="program__infos"
            :class="[{ announcement: show.announcement }, { 'program__infos--sunday': program.dateDay == checkDate.sunday }]"
          >
            <!-- Show time - dansk: Opvisningstiden -->
            <td class="program__infos__info time">{{ show.time }}</td>
            <!-- Show team - dansk: Opvisningsholdet -->
            <!-- Only show this table data if the lineup is set to true in the store -->
            <td v-if="show.lineup" class="program__infos__info team">
              <nuxt-link :to="'/lineups/' + show.id" class="program__infos__info__links">{{ show.team }}</nuxt-link>
            </td>
            <!-- If the lineup is false in the store, show this table data -->
            <td v-else class="program__infos__info team">{{ show.team }}</td>
            <!-- Show team instructors - dansk: Opvisningsholdets instruktører -->
            <td class="program__infos__info instructors">{{ show.instructors }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    /* Returning the checkDate from index.js */
    checkDate() {
      return this.$store.state.checkDate;
    },
    /* Returning the program from program.js */
    programs() {
      return this.$store.state.program.program;
    },
  },
};
</script>

<style>
.program {
  &__headers {
    background-color: var(--color-malachite);
    &__header {
      padding: 1%;
    }
    &--sunday {
      background-color: var(--color-amaranth);
    }
  }

  &__infos {
    background-color: var(--color-pixie-green);
    font-weight: var(--base-font-light-weight);
    /* Every other color is a bit lighter */
    &:nth-child(even) {
      background-color: var(--color-willow-brook);
    }
    &--sunday {
      background-color: var(--color-wewak);
      /* Every other color is a bit lighter */
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
  @media (--viewport-xs-max) {
    width: 14%;
  }
}

.team,
.instructors {
  width: 45%;
  @media (--viewport-xs-mx) {
    width: 43%;
  }
}

.announcement {
  font-weight: var(--heading-font-weight);
}
</style>
