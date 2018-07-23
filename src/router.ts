import Vue from 'vue';
import Router from 'vue-router';
import authRoutes from './routes/auth';
import dashboardRoutes from './routes/dashboard';
import { init, auth } from './guards';

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
router.beforeEach(auth);

export default router;
