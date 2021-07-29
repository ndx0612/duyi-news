import Vue from 'vue'
import App from './App'
import module from './ajax/api/index.js'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$http = module;

const app = new Vue({
    ...App
})
app.$mount()
