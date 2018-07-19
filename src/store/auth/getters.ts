import { GetterTree } from 'vuex';
import { State } from './state';

export enum Getters {
  IS_LOGGED_IN = 'auth/IS_LOGGED_IN',
  IS_NEW_USER = 'auth/IS_NEW_USER',
  IS_LOGGED_IN_WITH_PASSWORD = 'auth/IS_LOGGED_IN_WITH_PASSWORD',
  USER = 'auth/USER',
}

const getters: GetterTree<State, any> = {
  [Getters.IS_LOGGED_IN]: (state) => !!state.uid,
  [Getters.IS_NEW_USER]: (state) => state.isNewUser,
  [Getters.IS_LOGGED_IN_WITH_PASSWORD]: (state) => state.isLoggedInWithPassword,
  [Getters.USER]: (state) => state,
};

export default getters;
