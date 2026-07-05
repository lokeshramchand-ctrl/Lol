// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import { lenis } from '@/main';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/BlogView.vue'),
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('@/views/BlogPostView.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Force Lenis to scroll to top instantly on route changes
router.afterEach(() => {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  }
});

export default router;