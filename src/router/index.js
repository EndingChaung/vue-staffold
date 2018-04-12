import Vue from 'vue';
import Router from 'vue-router';
// resources
import home from '@/pages/Home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    ...home,
  ],
});

export default router;
