import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import AddProfile from './views/addProfile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signUp',
      name:'signUp',
      component:SignUp
    },
    {
      path:'/addProfile',
      name:'addProfile',
      component:AddProfile
    }
  ]
})
