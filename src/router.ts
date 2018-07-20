import Vue from 'vue';
import Router from 'vue-router';
import { init } from './guards';
import authRoutes from './routes/auth';
import dashboardRoutes from './routes/dashboard';

Vue.use(Router);

const router = new Router({
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

router.beforeEach(init);

export default router;
