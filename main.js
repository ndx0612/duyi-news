import Vue from 'vue'
import App from './App'
import module from './ajax/api/index.js'
import userMixin from './common/rulesMixin.js'
import store from './store'
Vue.use(userMixin)
Vue.config.productionTip = false


App.mpType = 'app'
Vue.prototype.$http = module;

const app = new Vue({
  ...App,
  store
})
app.$mount()
