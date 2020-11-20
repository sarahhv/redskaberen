<template>
  <main class="app-content">
    <LoginButton />
    <Program />
  </main>
</template>

<script>
require('dayjs/locale/da');
var dayjs = require('dayjs');
export default {
  data() {
    return {
      /* I've created a chekDate to enable prototyping check. 
      In the real prototype it would check on the current date,
      and compare it to the date of the program  */
      checkDate: dayjs('2020-11-21').locale('da').format('dddd'),
      /* This checks to see if it's sunday */
      sunday: dayjs().day(0).locale('da').format('dddd'),
    };
  },
  computed: {
    programs() {
      return this.$store.state.program.program;
    },
  },
};
</script>
