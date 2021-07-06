import { GetterTree } from 'vuex';
import { IRootState } from '../index';
import { State } from './state';

export enum GetterType {
  GetCounterValue = 'getCounterValue'
}

export type Getter = {
  [GetterType.GetCounterValue](state: IRootState): number
}

export const getters: GetterTree<State, IRootState> = {
  getCounterValue (state) {
    return state.counterValue
  }
};

