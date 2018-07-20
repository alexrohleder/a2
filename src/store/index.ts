import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import auth from './auth';
import core from './core';
import { State as CoreState } from './core';
import { State as AuthState } from './auth/state';

Vue.use(Vuex);

export interface RootState {
  auth: AuthState;
  core: CoreState;
}

export default new Store<RootState>({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    auth,
    core,
  },
});
