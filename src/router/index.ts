import MainLayout from '@/components/MainLayout.vue';
import IDVerificationPage from '@/pages/Auth/IDVerificationPage.vue';
import LoginPage from '@/pages/Auth/LoginPage.vue';
import SignupPage from '@/pages/Auth/SignupPage.vue';
import DashboardPage from '@/pages/DashboardPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      name: 'Main',
      redirect: { name: 'Dashboard' },
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardPage,
        },
      ],
    },
    {
      path: '/registration',
      name: 'Registration',
      component: SignupPage,
      alias: ['/signup', '/reg'],
    },
    {
      path: '/verification',
      name: 'Verification',
      component: IDVerificationPage,
      alias: ['/verif'],
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      alias: ['/signin'],
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'Login' },
    },
  ],
});

export default router;
