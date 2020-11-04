<template>
  <table class="program">
    <tr class="program__headers">
      <th class="program__headers__header time">Tid</th>
      <th class="program__headers__header team">Hold</th>
      <th class="program__headers__header instructors">Instruktører</th>
    </tr>
    <tr v-for="prog in program" :key="prog.username" class="program__infos">
      <td class="program__infos__info time">{{ prog.id }}</td>
      <td class="program__infos__info team">{{ prog.name }}</td>
      <td class="program__infos__info instructors">{{ prog.username }}</td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState(['program']),
  mounted() {
    this.$store.dispatch('loadProgram');
  },
};
</script>

<style>
.program {
  width: 80vw;
  margin: auto;
  text-align: left;
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
</style>
