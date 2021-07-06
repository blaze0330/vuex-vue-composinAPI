import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationName {
  CountUp = 'COUNT_UP'
}

export type MutationType = {
  [MutationName.CountUp](state: State): void
}

export const mutations: MutationTree<State> = {
  [MutationName.CountUp](state) {
    state.counterValue++
  }
};


