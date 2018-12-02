import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Board from './views/Board.vue'
import About from './views/About.vue'
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';

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
          path: '/about',
          name: 'about',
          component: About
      }
    ,
    {
      path: '/showBlogs',
      name: 'showBlogs',
        component: showBlogs
    },
      { path: '/add', component: addBlog},
      { path: '/blog/:id', component: singleBlog}

  ]
})
