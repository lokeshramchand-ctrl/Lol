import { createRouter, createWebHistory } from 'vue-router';
import { HomeView , BlogPostView , BlogView } from '@/views';

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
  scrollBehavior(to, from, savedPosition) {
    // 1. If there is a hash (e.g., /#works), wait 100ms for DOM to render, then scroll
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          });
        }, 100);
      });
    }
    
    // 2. If the user clicks the browser Back/Forward buttons, remember their scroll depth
    if (savedPosition) {
      return savedPosition;
    }

    // 3. Otherwise (e.g., opening a new blog post), snap instantly to the top
    return { top: 0 };
  }
});


export default router;