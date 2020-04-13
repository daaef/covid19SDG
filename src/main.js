import Vue from 'vue';
import Uikit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import 'uikit/dist/js/uikit.min';
import 'uikit/dist/css/uikit.min.css';

Uikit.use(Icons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
