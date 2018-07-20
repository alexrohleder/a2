import { ActionTree, MutationTree, GetterTree } from 'vuex';

export enum Actions {
  SET_LOADING = 'core/SET_LOADING',
  SET_INITIALIZED = 'core/SET_INITIALIZED',
}

export enum Mutations {
  SET_LOADING = 'core/SET_LOADING',
  SET_INITIALIZED = 'core/SET_INITIALIZED',
}

export enum Getters {
  IS_LOADING = 'core/IS_LOADING',
  IS_INITIALIZED = 'core/IS_INITIALIZED',
}

export interface State {
  isLoading: boolean;
  isLoadingSince: number | null;
  isInitialized: boolean;
}

const initialState: State = {
  isLoading: true,
  isLoadingSince: +Date.now(),
  isInitialized: false,
};

const actions: ActionTree<State, any> = {
  [Actions.SET_LOADING](context, as) {
    context.commit({
      type: Mutations.SET_LOADING,
      as,
    });
  },
  [Actions.SET_INITIALIZED](context) {
    context.commit({
      type: Mutations.SET_INITIALIZED,
    });
  },
};

const mutations: MutationTree<State> = {
  [Mutations.SET_LOADING](localState: State, mutation) {
    localState.isLoading = mutation.as;
    localState.isLoadingSince = mutation.as ? +Date.now() : null;
  },
  [Mutations.SET_INITIALIZED](localState: State)  {
    localState.isInitialized = true;
    mutations[Mutations.SET_LOADING](localState, { as: false });
  },
};

const getters: GetterTree<State, any> = {
  [Getters.IS_LOADING]: (state) => state.isLoading,
  [Getters.IS_INITIALIZED]: (state) => state.isInitialized,
};

export default {
  state: initialState,
  actions,
  getters,
  mutations,
};
