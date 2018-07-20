import { NavigationGuard } from 'vue-router';
import store from './store';
import { Getters as CoreGetters } from './store/core';

export const init: NavigationGuard = (to, from, next) => {
  if (store.getters[CoreGetters.IS_INITIALIZED]) {
    next();
  } else {
    const interval = setInterval(() => {
      if (store.getters[CoreGetters.IS_INITIALIZED]) {
        clearInterval(interval);
        next();
      }
    }, 30);
  }
};
