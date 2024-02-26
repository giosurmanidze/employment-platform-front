import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ForgotPasswordPage from '@/pages/ForgotPasswordPage.vue'
import ResetPasswordPage from '@/pages/ResetPasswordPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: ForgotPasswordPage
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPasswordPage
    }
  ]
})

export default router
