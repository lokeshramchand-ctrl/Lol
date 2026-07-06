import { createRouter, createWebHistory } from 'vue-router';
import { HomeView , BlogPostView , BlogView } from '@/views';
import { lenis } from '@/main';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView,
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPostView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Force Lenis to snap to the top instantly on route changes
router.afterEach(() => {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  }
});

export default router;