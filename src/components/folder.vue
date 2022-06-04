<template>
  <File :data="fileData" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileData from "../models/FileData";
import FolderData from "../models/FolderData";
import WindowData from "../models/WindowData";
import File from "./file.vue";
import Window from "./window.vue";
import {openWindow} from "../store/app";

export default defineComponent({
  components: { File, Window },
  name: "Folder",
  props: {
    data: {
      type: FolderData,
      required: true
    }
  },
  data() {
    return {
      windowData: new WindowData({
        id: this.data.id,
        label: this.data.label || this.data.id,
        files: this.data.files,
        folders: this.data.folders
      }),
      fileData: new FileData({
        id: this.data.id,
        label: this.data.label,
        icon: 'fas fa-folder',
        activated: () => {
          return openWindow(this.windowData);
        }
      })
    }
  }
});
</script>
