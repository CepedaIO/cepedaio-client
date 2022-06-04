<template>
  <main class="Desktop">
    <WindowProvider v-for="[window, content] in windows" :window="window" :content="content" />
    <app-menu class="absolute left-0 right-0 bottom-3" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {getAllWindows} from "../../store/app";
import File from "../file.vue";
import Folder from "../folder.vue";
import AppMenu from "./app-menu.vue";
import WindowProvider from "../windows/window-provider.vue";

export default defineComponent({
  name: 'Desktop',
  components: { File, Folder, WindowProvider, AppMenu },
  computed: {
    windows: () => getAllWindows.value
  }
});
</script>
