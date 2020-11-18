<template>
  <section class="program-container">
    <!-- Should be fetched data both h1 and p tag -->
    <h1>{{ program.title }}</h1>
    <p>{{ program.dateDay }} den {{ program.date }}</p>
    <!-- Table for the show-program that contains a row with headers and a row with a loop of the programData -->
    <table class="program">
      <thead>
        <tr id="e" class="program__headers" :class="{ 'program__headers--sunday': program.dateDay == sunday }">
          <th class="program__headers__header time">Tid</th>
          <th class="program__headers__header team">Hold</th>
          <th class="program__headers__header instructors">Instruktører</th>
        </tr>
      </thead>
      <ShowsTbody />
    </table>
  </section>
</template>

<script>
require('dayjs/locale/da');
var dayjs = require('dayjs');
export default {
  data() {
    return {
      sunday: dayjs().day(0).locale('da').format('dddd'),
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
    &--sunday {
      background-color: var(--color-amaranth);
    }
  }
}
</style>
