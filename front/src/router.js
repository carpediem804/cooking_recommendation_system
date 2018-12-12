import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import AddProfile from './views/addProfile.vue'
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';
import ingredient from './components/ingredient.vue';
import login from './components/Login.vue'
import blogblog from './components/blogtest.vue'
import comment from './components/Comment.vue'
import my from './components/mywrite.vue'
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
          path: '/comment',
          name: 'comment',
          component: comment
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
    },
      {
          path: '/showBlogs',
          name: 'showBlogs',
          component: showBlogs
      },
      { path: '/add', component: addBlog},
      { path: '/blog/:id', component: singleBlog},

      {
          path:'/ingredient',
          name:'ingredient',
          component:ingredient
      },
      {
        path:'/login',
          name:'login',
          component:login
      },
      {
        path:'/testtest',
          name:'blogblog',
          component:blogblog
      },
      {
        path:'/mine',
          name:'mywrite',
          component:my
      }
  ]
})
