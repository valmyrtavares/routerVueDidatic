import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PageLoding from './components/PageLoading'

Vue.config.productionTip = false
Vue.component("PageLoading",PageLoding)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
