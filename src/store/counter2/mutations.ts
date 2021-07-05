import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationType {
  CountUp = 'countUp'
}

export type Mutation = {
  [MutationType.CountUp](state: State): void
}

export const mutations: MutationTree<State> = {
  [MutationType.CountUp](state) {
    state.counterVar++
  }
};


