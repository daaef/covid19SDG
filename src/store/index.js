import Vue from 'vue';
import Vuex from 'vuex';
import calculateCovid from '../estimator';

Vue.use(Vuex);
localStorage.setItem('report', JSON.stringify(null));
export default new Vuex.Store({
  state: {
    formData: {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType: 'days',
      timeToElapse: 58,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614
    },
    report: null
  },
  mutations: {
    estimate(state, data) {
      state.formData = { ...data };
      state.report = calculateCovid(state.formData);
      localStorage.setItem('report', JSON.stringify(state.report));
    },
    clearReport(state) {
      state.report = null;
      localStorage.setItem('report', JSON.stringify(state.report));
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    formData: (state) => state.formData,
    report: (state) => (
      state.report ? state.report : JSON.parse(localStorage.getItem('report'))
    )
  }
});
