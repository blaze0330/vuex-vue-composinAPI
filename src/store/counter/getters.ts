import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { State } from './state';

export enum GetterType {
  GetCounterValue = 'getCounterValue',
  GetCounterValueWithOffset = 'getCounterValueWithOffset'
}

export type Getter = {
  [GetterType.GetCounterValue](state: IRootState): number,
  [GetterType.GetCounterValueWithOffset](state: IRootState): number
}

export const getters: GetterTree<State, IRootState> = {
  [GetterType.GetCounterValue](state) {
    return state.counterValue
  },
  [GetterType.GetCounterValueWithOffset]: (state) => (offset: number) => {
    return state.counterValue + offset
  }
};

