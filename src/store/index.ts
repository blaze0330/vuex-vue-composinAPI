// import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'
import { State as CounterState } from './counter/state'
import { State as CounterState2 } from './counter2/state'
import  { counter, ModuleTypes as CounterStoreModuleTypes } from './counter'
import  { counter2 } from './counter2'

// import example from './module-example'
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  counter: CounterState
  counter2: CounterState2
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default function() {
  const Store = createStore<StateInterface>({
    modules: {
      counter,
      counter2
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })
  return Store
}

export function useStore() {
  return vuexUseStore(storeKey)
}

type StoreModules = {
  counterModule: CounterStoreModuleTypes;
};

export type Store = CounterStoreModuleTypes<Pick<StoreModules, 'counterModule'>>;


