<template>
  <File :data="fileData" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileData from "../models/FileData";
import FolderData from "../models/FolderData";
import File from "./file.vue";
import Window from "./windows/window.vue";
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
      fileData: new FileData({
        id: this.data.id,
        label: this.data.label,
        icon: 'fas fa-folder text-secondary ',
        activated: () => {
          return openWindow(this.data);
        }
      })
    }
  }
});
</script>
