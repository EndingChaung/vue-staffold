const login = r => require.ensure([], () => r(require('./Login.vue')), 'auth');

export default [{
  path: '/auth/login',
  name: 'login__index',
  component: login,
}];
