import firebase from 'firebase';
import { MutationTree } from 'vuex';
import { State } from './state';

export enum Mutations {
  SET_USER_INFO = 'auth/SET_USER_INFO',
  UNSET_USER_INFO = 'auth/UNSET_USER_INFO',
  UPDATE_USER_INFO = 'auth/UPDATE_USER_INFO',
  SET_AUTH_ERROR = 'auth/SET_AUTH_ERROR',
}

const unsetUserInfo = (state: State) => {
  state.isNewUser = null;
  state.isLoggedInWithPassword = null;
  state.isEmailVerified = null;
  state.displayName = null;
  state.email = null;
  state.photoURL = null;
  state.providerId = null;
  state.uid = null;
  state.name = null;
  state.surname = null;
  state.wantsMarketing = null;
  state.errorCode = null;
  state.errorMessage = null;
};

const mutations: MutationTree<State> = {
  [Mutations.UNSET_USER_INFO](state: State) {
    unsetUserInfo(state);
  },

  [Mutations.SET_USER_INFO](state: State, mutation) {
    unsetUserInfo(state);

    if (mutation.uid) {
      state.isNewUser = Boolean(mutation.isNewUser);
      state.isLoggedInWithPassword = Boolean(mutation.isLoggedInWithPassword);
      state.isEmailVerified = Boolean(mutation.emailVerified);
      state.displayName = mutation.displayName;
      state.email = mutation.email;
      state.photoURL = mutation.photoURL;
      state.providerId = mutation.providerId;
      state.uid = mutation.uid;
      state.name = mutation.name;
      state.surname = mutation.surname;
      state.wantsMarketing = mutation.wantsMarketing;
    }

    state.attempts++;
  },

  [Mutations.UPDATE_USER_INFO](state: State, mutation) {
    for (const property in mutation) {
      if (property in state) {
        state[property] = mutation[property];
      }
    }
  },

  [Mutations.SET_AUTH_ERROR](state: State, mutation) {
    state.errorCode = mutation.code;
    state.errorMessage = mutation.message;
    state.attempts++;
  },
};

export default mutations;
