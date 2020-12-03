import dayjs from 'dayjs';
export const state = () => ({
  /* I've created a chekDate to enable prototyping check. 
  In the real prototype it would check on the current date,
  and compare it to the date of the program  */
  checkDate: {
    date: dayjs('2020-11-21').locale('da').format('dddd'),
    sunday: dayjs().day(0).locale('da').format('dddd'),
  },
});

export const getters = {};

export const mutations = {};

export const actions = {};
