<template>
  <q-page class="row items-center justify-evenly">
    <vuex-example/>
  </q-page>
</template>

<script lang="ts">
import VuexExample from 'src/components/VuexExample.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { VuexExample }
});
</script>
