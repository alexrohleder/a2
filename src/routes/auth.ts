import { AuthGuardFlag } from '@/guards';

const layout = () => import( /* webpackChunkName: "auth" */ '@/views/auth/Layout.vue');
const SignIn = () => import( /* webpackChunkName: "auth" */ '@/views/auth/SignIn.vue');
const Welcome = () => import( /* webpackChunkName: "auth" */ '@/views/auth/Welcome.vue');
const SignUp1 = () => import( /* webpackChunkName: "auth" */ '@/views/auth/SignUp/FirstStep.vue');
const SignUp2 = () => import( /* webpackChunkName: "auth" */ '@/views/auth/SignUp/SecondStep.vue');
const SignUp3 = () => import( /* webpackChunkName: "auth" */ '@/views/auth/SignUp/ThirdStep.vue');
const ResetPassword = () => import( /* webpackChunkName: "auth" */ '@/views/auth/ResetPassword.vue');
const ConfirmResetPassword = () => import( /* webpackChunkName: "auth" */ '@/views/auth/ConfirmResetPassword.vue');
const ConfirmProfile = () => import( /* webpackChunkName: "auth" */ '@/views/auth/ConfirmProfile.vue');

export default [
  {
    path: '/welcome',
    name: 'auth.welcome',
    components: {
      layout,
      content: Welcome,
    },
    meta: {
      auth: AuthGuardFlag.CANNOT_BE_AUTHENTICATED,
    },
  },
  {
    path: '/sign-in',
    name: 'auth.sign-in',
    components: {
      layout,
      content: SignIn,
    },
    meta: {
      auth: AuthGuardFlag.CANNOT_BE_AUTHENTICATED,
    },
  },
  {
    path: '/sign-up',
    name: 'auth.sign-up',
    components: {
      layout,
      content: SignUp1,
    },
    meta: {
      auth: AuthGuardFlag.CANNOT_BE_AUTHENTICATED,
    },
  },
  {
    path: '/sign-up/inform-your-email',
    name: 'auth.sign-up.2',
    components: {
      layout,
      content: SignUp2,
    },
    meta: {
      auth: AuthGuardFlag.CANNOT_BE_AUTHENTICATED,
    },
  },
  {
    path: '/sign-up/inform-your-password',
    name: 'auth.sign-up.3',
    components: {
      layout,
      content: SignUp3,
    },
    meta: {
      auth: AuthGuardFlag.CANNOT_BE_AUTHENTICATED,
    },
  },
  {
    path: '/reset-password',
    name: 'auth.reset-password',
    components: {
      layout,
      content: ResetPassword,
    },
    meta: {
      auth: AuthGuardFlag.CANNOT_BE_AUTHENTICATED,
    },
  },
  {
    path: '/confirm-reset-password',
    components: {
      layout,
      content: ConfirmResetPassword,
    },
    meta: {
      auth: AuthGuardFlag.CANNOT_BE_AUTHENTICATED,
    },
  },
  {
    path: '/confirm-profile',
    name: 'auth.confirm-profile',
    components: {
      layout,
      content: ConfirmProfile,
    },
    meta: {
      auth: AuthGuardFlag.MUST_BE_AUTHENTICATED,
    },
  },
];
