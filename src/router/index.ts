import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/MainLayout.vue'),
      name: 'Main',
      children: [],
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@pages/Auth/SignupPage.vue'),
      alias: ['/signup', '/reg'],
    },
    {
      path: '/verification',
      name: 'Verification',
      component: () => import('@pages/Auth/IDVerificationPage.vue'),
      alias: ['/verif'],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@pages/Auth/LoginPage.vue'),
      alias: ['/signin'],
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'Login' },
    },
  ],
});

export default router;
