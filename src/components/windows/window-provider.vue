<template>
  <folder-window v-if="isFolder" :window="window" :content="content" :style="{ 'z-index' : 10 + index }" />
  <embed-window v-if="isEmbed" :window="window" :content="content" :style="{ 'z-index' : 10 + index }" />
</template>

<script>
import FolderWindow from "./folder-window.vue";
import EmbedWindow from "./embed-window.vue";

import WindowData from "../../models/WindowData";
import FolderData from "../../models/FolderData";
import EmbedData from "../../models/EmbedData";

export default {
  name: "WindowProvider",
  components: {FolderWindow, EmbedWindow},
  props: {
    window: WindowData,
    content: FolderData | EmbedData,
    index: Number
  },
  computed: {
    isFolder() {
      return this.content instanceof FolderData
    },
    isEmbed() {
      return this.content instanceof EmbedData
    }
  }
}
</script>

<style scoped>

</style>
