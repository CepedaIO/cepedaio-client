<template>
  <component v-bind:is="component" :window="window" :content="content" :style="{ 'z-index' : 10 + index }" />
</template>

<script>
import FolderWindow from "./folder-window.vue";
import EmbedWindow from "./embed-window.vue";
import ContributionWindow from "./contribution-window.vue";

import WindowData from "../../models/WindowData";
import FolderData from "../../models/FolderData";
import EmbedData from "../../models/EmbedData";
import ContributionData from "../../models/ContributionData";

const components = [
  {
    test: (data) => data instanceof FolderData,
    type: 'folder-window'
  }, {
    test: (data) => data instanceof EmbedData,
    type: 'embed-window'
  }, {
    test: (data) => data instanceof ContributionData,
    type: 'contribution-window'
  }
]

export default {
  name: "WindowProvider",
  components: {FolderWindow, EmbedWindow, ContributionWindow},
  props: {
    window: WindowData,
    content: FolderData | EmbedData,
    index: Number
  },
  computed: {
    component() {
      return components.find((slice) => slice.test(this.content)).type;
    }
  }
}
</script>
