import Vue from 'vue'
import './flexable';
import App from './App.vue'

Vue.config.productionTip = false;
console.log(process.env)
new Vue({
  render: h => h(App),
}).$mount('#app')
