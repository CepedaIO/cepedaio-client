<template>
  <main class="absolute"
    :class="{
      'w-[425px] h-[425px]': !fullscreen,
      'w-full h-full': fullscreen
    }"
    :style="{ left, top }"
  >
    <header class="pl-5 pr-2 py-2 flex justify-between items-center box-border z-10" v-move="onMove" @dblclick="toggleFullscreen">
      <span>
        {{ data.label }}
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

    <section class="bg-white border border-2 border-blue-300 w-full h-full box-content overflow-hidden">
      <slot />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../directives/move";
import WindowData from "../models/WindowData";
import { desktopStore } from "../store/desktop";
import File from "./file.vue";

export function isFolder(obj:any): obj is WindowData {
  return typeof obj.id === 'string' && typeof obj.label === 'string' && Array.isArray(obj.items);
}

export default defineComponent({
  name: 'Window',
  directives: { move },
  components: { File },
  props: {
    data: {
      type: WindowData,
      required: true
    }
  },
  data() {
    return {
      movable: false,
      fullscreen: false,
      oldPosition: null as null | Position
    }
  },
  computed: {
    left() { return `${this.data.position.left}px`; },
    top() { return `${this.data.position.top}px`; },
    hidden() { return !desktopStore.state.opened.includes(this.data.id); },
  },
  mounted() {
    const { left, top } = this.$el.getBoundingClientRect();

    this.data.position.left = left;
    this.data.position.top = top;

    desktopStore.register(this.data);
  },
  methods: {
    onMove(options:any) {
      this.data.position.left = options.left;
      this.data.position.top = options.top;
    },
    onClose() {
      desktopStore.closeWindow(this.data.id);
    },
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;

      if(this.fullscreen) {
        this.oldPosition = { ...this.data.position };
        this.data.position.left = 0;
        this.data.position.top = 0;
      } else {
        this.data.position = this.oldPosition!;
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
