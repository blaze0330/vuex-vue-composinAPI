import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { State } from './state';

export enum GetterType {
  GetCounterValue = 'getCounterValue'
}

export type Getter = {
  [GetterType.GetCounterValue](state: StateInterface): number
}

export const getters: GetterTree<State, StateInterface> = {
  getCounterValue (state) {
    return state.counterValue
  }
};

