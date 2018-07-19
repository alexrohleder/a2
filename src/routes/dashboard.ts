const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue');

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard.home',
  },
];
