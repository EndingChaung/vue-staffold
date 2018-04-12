import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: process.env.DOMAIN,
});

instance.interceptors.request.use((config) => {
  store.commit('SET_LOADING', true);
  return {
    ...config,
    headers: {
      Accept: 'application/json',
      'User-Token': store.state.token,
    },
  };
}, (error) => {
  store.commit('SET_LOADING', false);
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  store.commit('SET_LOADING', false);
  return response;
}, (error) => {
  store.commit('SET_LOADING', false);
  return Promise.reject(error);
});

export default instance;
