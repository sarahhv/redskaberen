import axios from 'axios';
export const state = () => ({});

export const getters = {};

export const mutations = {
  SET_Program(state, program) {
    state.program = program;
  },
};

export const actions = {
  loadProgram({ commit }) {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data)
      .then((program) => {
        console.log(program);
        commit('SET_Program', program);
      });
  },
};
