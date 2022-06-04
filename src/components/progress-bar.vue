<template>
  <main class="progress-bar bg-indigo-100 block-inline rounded-xl overflow-hidden box-border min-w-[200px] h-[21px]">
    <div class="h-full bg-indigo-300" :style="{ width }" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ProgressBar',
  props: {
    percent: {
      type: Number,
      required: true
    }
  },
  computed: {
    width() {
      return `${this.percent}%`;
    }
  }
});
</script>

<style scoped>
</style>
