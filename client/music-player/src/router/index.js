import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import Four from '@/components/Four'

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
    }
  ]
})
