<template>
  <section class="program-container">
    <h1>Børnedag i Vejlby-Risskov Hallen, Aarhus</h1>
    <p>Lørdag den 09 marts 2019</p>
    <table class="program">
      <tr class="program__headers">
        <th class="program__headers__header time">Tid</th>
        <th class="program__headers__header team">Hold</th>
        <th class="program__headers__header instructors">Instruktører</th>
      </tr>
      <tr v-for="plan in program" :key="plan.id" class="program__infos" :class="{ announcement: plan.announcement }">
        <td class="program__infos__info time">{{ plan.time }}</td>
        <td class="program__infos__info team">{{ plan.team }}</td>
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

<style>
.program-container {
  width: 80vw;
  margin: auto;
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
    &:nth-child(odd) {
      background-color: var(--color-willow-brook);
    }
    &__info {
      padding: 1%;
    }
  }
}

.time {
  width: 20%;
}

.team {
  width: 40%;
}

.instructors {
  width: 40%;
}

.announcement {
  font-weight: var(--heading-font-weight);
}
</style>
