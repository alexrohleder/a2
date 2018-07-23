import { NavigationGuard } from 'vue-router';
import store from './store';
import { Getters as CoreGetters } from './store/core';
import { Getters as AuthGetters } from './store/auth';

export enum AuthGuardFlag {
  MUST_BE_AUTHENTICATED,
  CANNOT_BE_AUTHENTICATED,
}

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

export const auth: NavigationGuard = (to, from, next) => {
  if (store.getters[AuthGetters.IS_LOGGED_IN]) {
    const cannotBeAuthenticatedToAccessRoute = to.matched.some((route) => {
      return route.meta.auth === AuthGuardFlag.CANNOT_BE_AUTHENTICATED;
    });

    if (cannotBeAuthenticatedToAccessRoute) {
      return next({
        name: 'dashboard.home',
      });
    }
  } else {
    const mustBeAuthenticatedToAccessRoute = to.matched.some((route) => {
      return route.meta.auth === AuthGuardFlag.MUST_BE_AUTHENTICATED;
    });

    if (mustBeAuthenticatedToAccessRoute) {
      const redirect = to.fullPath.includes('?redirect=')
        ? to.fullPath.substr(0, to.fullPath.indexOf('?redirect='))
        : to.fullPath;

      return next({
        name: 'auth.welcome',
        query: {
          redirect,
        },
      });
    }
  }

  next();
};
