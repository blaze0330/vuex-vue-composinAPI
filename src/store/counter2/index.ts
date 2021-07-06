import { Module, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { StateInterface } from '../index';
import { state, State } from './state';
import { actions, ActionType } from './actions';
import { getters, Getter } from './getters';
import { mutations, MutationType } from './mutations';

export type ModuleTypes<S = State> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof MutationType,
    P extends Parameters<MutationType[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<MutationType[K]>;
} & {
  getters: {
    [K in keyof Getter]: ReturnType<Getter[K]>;
  };
} & {
  dispatch<K extends keyof ActionType>(
    key: K,
    payload?: Parameters<ActionType[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ActionType[K]>;
};

export const counter2: Module<State, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

