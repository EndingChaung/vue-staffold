const Home = r => require.ensure([], () => r(require('./Home.vue')), 'group-home');

export default [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    title: '首页',
    layout: 'home',
  },
}];
