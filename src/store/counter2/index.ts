import { Module, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { StateInterface } from '../index';
import { state, State } from './state';
import { actions, Action, ActionType } from './actions';
import { getters, Getter } from './getters';
import { mutations, Mutation, MutationType } from './mutations';

export type ModuleTypes<S = State> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof Mutation,
    P extends Parameters<Mutation[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutation[K]>;
} & {
  getters: {
    [K in keyof Getter]: ReturnType<Getter[K]>;
  };
} & {
  dispatch<K extends keyof Action>(
    key: K,
    payload?: Parameters<Action[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Action[K]>;
};

export const counterStore2: Module<State, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export {
  ActionType,
  MutationType
}
