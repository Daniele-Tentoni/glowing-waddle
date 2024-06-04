import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StoreView from '../views/store/StoreView.vue';
import ListingView from '@/views/store/ListingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':id',
          name: 'calendar',
          component: () => import('@/views/calendar/CalendarView.vue'),
        },
      ],
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView,
    },
    {
      path: '/listing/:id',
      name: 'listing-details',
      component: ListingView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart/CartView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
