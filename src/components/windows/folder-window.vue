<template>
  <Window :data="window">
    <div class="relative w-full h-full gap-x-5 flex flex-row flex-wrap p-2">
      <template v-for="file in files">
        <File :data="file" :window="window"/>
      </template>

      <template v-for="folder in content.folders">
        <Folder :data="folder" />
      </template>
    </div>
  </Window>
</template>

<script lang="ts">
import Window from "./window.vue";
import {defineComponent} from "vue";
import File from "../file.vue";
import Folder from "../folder.vue";
import WindowData from "../../models/WindowData";
import FolderData from "../../models/FolderData";
import FileData from "../../models/FileData";

export default defineComponent({
  name: 'FolderWindow',
  components: { Window, File, Folder },
  props: {
    window: {
      type: WindowData,
      required: true
    },
    content: {
      type: FolderData,
      required: true
    }
  },
  computed: {
    files(): FileData[] {
      return this.content.files as FileData[]
    }
  }
});
</script>
