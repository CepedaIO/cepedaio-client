<template>
  <main @click="onClick" class="App p-5">
    <router-view />
    <desktop />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { state} from "./store/app";
import Desktop from "./components/desktop/index.vue";

export default defineComponent({
  name: "App",
  components: { Desktop },
  methods: {
    onClick() {
      state.active = null;
    }
  }
});
</script>

<style>
</style>
