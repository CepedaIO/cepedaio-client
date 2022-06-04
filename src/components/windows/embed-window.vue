<template>
  <Window :key="window.id" :data="window" :style="{ 'z-index': 10 + window.index }">
    <img v-if="isImage" class="relative w-auto h-full m-auto" :src="content.src" />
    <embed v-if="!isImage" :src="content.src" width="100%" height="100%" :type="content.mime">
  </Window>
</template>

<script lang="ts">
import Window from "./window.vue";
import { defineComponent } from "vue";
import WindowData from "../../models/WindowData";
import EmbedData from "../../models/EmbedData";

export default defineComponent({
  name: 'EmbedWindow',
  components: { Window },
  props: {
    window: WindowData,
    content: [EmbedData]
  },
  computed: {
    isImage() {
      return this.content.type === 'image';
    }
  }
});
</script>
