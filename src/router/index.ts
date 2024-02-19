import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/MainLayout.vue'),
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
      name: 'Registration',
      component: () => import('@pages/Auth/LoginPage.vue'),
      alias: ['/signin'],
    },
  ],
});

export default router;
