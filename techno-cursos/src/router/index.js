import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'
import Cursos from '../views/Cursos.vue'
Vue.use(Router)
 
 
 
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/cursos',
      name: 'Cursos',
      component: Cursos
    }
 
  ]
})
