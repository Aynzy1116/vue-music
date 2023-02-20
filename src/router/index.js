import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCounterStore } from '@/stores/counter.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/other/:id',
      name: 'other',
      component: () => import('../views/Other.vue')
    }
  ]
})

// 路由守卫
router.beforeEach(async (to, from, next) => {
  // const store = useCounterStore()
  // console.log(to.name)
  // if (to.name != 'other' && to.name == 'about') {
  //   next(`/other/${12}?name=122`)
  // } else {
  //   next()
  // }
  next()

})

export default router
