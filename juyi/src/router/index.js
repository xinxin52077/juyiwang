import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: "",
        redirect: "/service"
      },
      {
        path: '/service',
        name: 'Service',
        component: () => import('../views/service.vue')
      },
      {
        path: '/cooperation',
        name: 'Cooperation',
        component: () => import('../views/Cooperation.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/register.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
