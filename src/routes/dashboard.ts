import { AuthGuardFlag } from '@/guards';

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue');

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard.home',
    meta: {
      auth: AuthGuardFlag.MUST_BE_AUTHENTICATED,
    },
  },
];
