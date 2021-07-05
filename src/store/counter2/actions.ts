import { ActionContext, ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { State } from './state';
import { Mutation, MutationType } from './mutations'

type ActionAugment = Omit<ActionContext<State, StateInterface>, 'commit'> & {
  commit<K extends keyof Mutation>(
    key: K,
    payload: Parameters<Mutation[K]>[1]
  ): ReturnType<Mutation[K]>;
}

export enum ActionType {
  CountUp = 'countUp'
}

export type Action = {
  [ActionType.CountUp](context: ActionAugment): void
}

export const actions: ActionTree<State, StateInterface> = {
  [ActionType.CountUp]({ commit }, payload: number) {
    console.log(payload);

    commit(MutationType.CountUp, payload)
  }
};
