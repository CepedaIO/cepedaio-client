<template>
  <main class="progress-bar border-2 border-indigo-200 rounded-xl block-inline overflow-hidden box-border min-w-[200px]">
    <div class="min-h-[21px] bg-indigo-300" :style="{ width }" />
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
