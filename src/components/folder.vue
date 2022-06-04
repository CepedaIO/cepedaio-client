<template>
  <File :data="fileData" />
  <Window v-if="shouldRender" :data="windowData">
    <div class="relative w-full h-full gap-5 flex flex-row p-2">
      <File v-for="file in data.files" :key="file.id" :data="file" />
      <Folder v-for="folder in data.folders" :key="folder.id" :data="folder" />
    </div>
  </Window>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileData from "../models/FileData";
import FolderData from "../models/FolderData";
import WindowData from "../models/WindowData";
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
  data() {
    return {
      windowData: new WindowData({
        id: this.data.id,
        label: this.data.label || this.data.id
      }),
      fileData: new FileData({
        id: this.data.id,
        label: this.data.label,
        icon: 'fas fa-folder',
        activated: () => {
          return desktopStore.openWindow(this.data.id);
        }
      })
    }
  },
  computed: {
    shouldRender() {
      return desktopStore.state.opened.includes(this.data.id);
    }
  }
});
</script>