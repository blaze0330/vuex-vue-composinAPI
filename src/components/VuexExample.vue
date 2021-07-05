<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <q-btn @click="counter++">Count up</q-btn>
        <p>Counter: {{ counter2 }}</p>
    <q-btn @click="counter2++">Count up</q-btn>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed
} from 'vue';
import { useStore } from 'src/store'
import { MutationType as CounterMutationType } from 'src/store/counter';
import { MutationType as Counter2MutationType } from 'src/store/counter2';

export default defineComponent({
  name: 'VuexExmaple',
  setup() {
    const $store = useStore()

    let counter = computed({
      get: () => $store.state.counterStore.counterVar,
      set: () => $store.commit('counterStore/'+ CounterMutationType.CountUp)
    })

    let counter2 = computed({
      get: () => $store.state.counterStore2.counterVar,
      set: () => $store.commit('counterStore2/'+ Counter2MutationType.CountUp)
    })

    return { counter, counter2 }
  }

});
</script>
