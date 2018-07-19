import Vue from 'vue';
import Router from 'vue-router';
import authRoutes from './routes/auth';
import dashboardRoutes from './routes/dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    ...dashboardRoutes,
    ...authRoutes,
    {
      path: '*',
      redirect: {
        name: 'dashboard.home',
      },
    },
  ],
});
