<template>
  <main class="absolute overflow-hidden flex flex-col"
    :class="{ 
      hidden,
      'min-w-[425px] min-h-[425px]': !fullscreen,
      'w-full h-full': fullscreen
    }"
    :style="{ left, top }"
  >
    <header class="pl-5 pr-2 py-2 flex justify-between items-center box-border z-10" v-move="onMove" @dblclick="toggleFullscreen">
      <span>
        {{ self.label }}
      </span>
      
      <ul class="flex">
        <li class="py-1 px-2">
          <i class="fas fa-horizontal-rule fa-sm" />
        </li>
        <li class="py-1 px-2" @click="toggleFullscreen">
          <i class="fal fa-square" />
        </li>
        <li class="py-1 px-2" @click="onClose">
          <i class="fal fa-times fa-lg" />
        </li>
      </ul>
    </header>

    <section class="grow bg-white border border-2 border-blue-300 box-content relative overflow-hidden">
      <File v-for="(file, index) in self.files" :key="index" :self="file" :parent="self.id" class="z-0" />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../directives/move";
import { folderStore } from "../store/folder";
import File, { FileData } from "./file.vue";

export function isFolder(obj:any): obj is FolderData {
  return typeof obj.id === 'string' && typeof obj.label === 'string' && Array.isArray(obj.items);
}

export class FolderData {
  id!: string;
  label!: string;
  files!: Array<FileData>;
  left = 0;
  top = 0;

  constructor(self: Omit<FolderData, 'left' | 'top'>) {
    Object.assign(this, self);
  }
}

export default defineComponent({
  name: 'Folder',
  directives: { move },
  components: { File },
  props: {
    self: {
      type: FolderData,
      required: true
    }
  },
  data() {
    return {
      movable: false,
      fullscreen: false,
      oldLeft: 0,
      oldTop: 0
    }
  },
  computed: {
    left() { return `${this.self.left}px`; },
    top() { return `${this.self.top}px`; },
    hidden() { return !folderStore.state.active.includes(this.self.id); },
  },
  mounted() {
    const { left, top } = this.$el.getBoundingClientRect();
    
    this.self.left = left; 
    this.self.top = top;

    folderStore.register(this.self);
  },
  methods: {
    onMove(options:any) {
      this.self.left = options.left;
      this.self.top = options.top;
    },
    onClose() {
      folderStore.closeFolder(this.self.id);
    },
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;

      if(this.fullscreen) {
        this.oldLeft = this.self.left;
        this.oldTop = this.self.top;
        this.self.left = 0;
        this.self.top = 0;
      } else {
        this.self.left = this.oldLeft;
        this.self.top = this.oldTop;
      }
    }
  }
});
</script>

<style scoped>
  header {
    color: white;
    background-color: #0078D7;
    margin-left: -1px;
    margin-right: -2px;
    margin-top: -1px;
  }
</style>