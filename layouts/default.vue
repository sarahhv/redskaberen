<template>
  <div>
    <Nuxt :class="{ sunday: program.dateDay == sunday }" />
  </div>
</template>

<script>
require('dayjs/locale/da');
var dayjs = require('dayjs');
export default {
  data() {
    return {
      sunday: dayjs().day(7).locale('da').format('dddd'),
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
.sunday {
  background-color: var(--color-amaranth);
}
</style>
