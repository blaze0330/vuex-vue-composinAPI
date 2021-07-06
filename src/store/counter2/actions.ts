import { ActionContext, ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { State } from './state';
import { MutationType, MutationName } from './mutations'

type ActionAugment = Omit<ActionContext<State, StateInterface>, 'commit'> & {
  commit<K extends keyof MutationType>(
    key: K,
    payload: Parameters<MutationType[K]>[1]
  ): ReturnType<MutationType[K]>;
}

export enum ActionName {
  CountUp = 'countUp'
}

export type ActionType = {
  [ActionName.CountUp](context: ActionAugment): void
}

export const actions: ActionTree<State, StateInterface> = {
  [ActionName.CountUp]({ commit }, payload: number) {
    commit(MutationName.CountUp, payload)
  }
};
