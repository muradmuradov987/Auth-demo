import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import store from '../store'



const routes = [
  {
    path: '/',
    redirect: '/auth',

  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    redirect: '/login',

    children: [
      {
        path: '/login',
        name: 'login',
        component: LoginView,

      },
      {
        path: '/signUp',
        name: 'SignUp',
        component: SignUpView
      },
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated ) {
        next()
      } else {
        next("/auth")
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
