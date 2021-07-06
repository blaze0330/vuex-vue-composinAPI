<template>
  <div class="row">
    <p>Counter: {{ counter }}</p>
    <q-btn @click="counter++">Count up</q-btn>
  </div>
    <div class="row">
    <p>Counter 2: {{ counter2 }}</p>
    <q-btn @click="counter2++">Count up</q-btn>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed
} from 'vue';
import { useStore } from 'src/store'

export default defineComponent({
  name: 'VuexExmaple',
  setup() {
    const $store = useStore()

    let counter = computed({
      get: () => $store.getters['counter/getCounterValue'], //Direct access: $store.state.counter.counterValue
      set: () => $store.dispatch('counter/countUp')
    })

    let counter2 = computed({
      get: () => $store.getters['counter2/getCounterValue'], //Direct access: $store.state.counter2.counterValue
      set: () => $store.dispatch('counter2/countUp')
    })

    return { counter, counter2 }
  }
});
</script>
