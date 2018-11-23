import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/musicRecommend/One'
import Two from '@/components/ranking/Two'
import Three from '@/components/musicList/musicList'
import Four from '@/components/singer/Four'
import Player from '@/components/showMusic/Player'
import Songs from '@/components/showList/Songs'
import login from '@/components/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/One',
      name: 'One',
      component: One
    },
    {
      path: '/Two',
      name: 'Two',
      component: Two
    },
    {
      path: '/Three',
      name: 'Three',
      component: Three
    },
    {
      path: '/Four',
      name: 'Four',
      component: Four
    },
    {
      path: '/Player',
      name: 'Player',
      component: Player
    },
    {
      path: '/Three/:id',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
