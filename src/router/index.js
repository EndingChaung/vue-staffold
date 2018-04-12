import Vue from 'vue';
import Router from 'vue-router';
// layouts
import applicationLayout from '@/layouts/ApplicationLayout';
import HomeLayout from '@/layouts/HomeLayout';
// resources
import Home from '@/pages/home/route';
import auth from '@/pages/auth/route';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: applicationLayout,
      children: [
        ...Home,
      ],
    },
    {
      path: '/auth',
      component: HomeLayout,
      children: [
        ...auth,
      ],
    },
  ],
});

export default router;
