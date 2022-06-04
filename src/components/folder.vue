<template>
  <File :data="fileData" />
  <Window :data="data.window">
    <File v-for="file in data.files" :key="file.id" :data="file" />
    <Folder v-for="folder in data.folders" :key="folder.id" :data="folder" />
  </Window>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileData from "../models/FileData";
import FolderData from "../models/FolderData";
import { desktopStore } from "../store/desktop";
import File from "./file.vue";
import Window from "./window.vue";

export default defineComponent({
  components: { File, Window },
  name: "Folder",
  props: {
    data: {
      type: FolderData,
      required: true
    }
  },
  computed: {
    fileData(): FileData {
      return new FileData({
        id: this.data.id,
        label: this.data.label,
        icon: 'fas fa-folder',
        activated: () => {
          return desktopStore.openWindow(this.data.window.id);
        }
      });
    }
  }
});
</script>