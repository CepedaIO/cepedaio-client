<template>
  <main class="Window absolute flex flex-col shadow-xl rounded-2xl overflow-hidden border border-2 border-white bg-primary"
    :style="{ left, top, 'z-index': zIndex }"
    :class="{
      'w-screen h-screen': data.fullscreen
    }"
    @click="clickedWindow"
  >
    <header class="pl-5 pr-2 py-2 flex items-center z-10 w-full cursor-pointer" v-move="setPosition" @dblclick="toggleFullscreen">
      <div class="flex-grow text-center">
        {{ data.label || data.id }}
      </div>

      <ul class="flex ml-auto absolute right-2">
        <li class="py-1 px-1" @click="toggleFullscreen">
          <span class="dot bg-green-500" />
        </li>
        <li class="py-1 px-2">
          <span class="dot bg-yellow-500" />
        </li>
        <li class="py-1 px-1" @click.stop="onClose">
          <span class="dot bg-red-500" />
        </li>
      </ul>
    </header>

    <section
      :class="{
        'w-[425px] h-[425px]': !data.fullscreen,
        'w-full h-full': data.fullscreen
      }"
    >
      <slot />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../../directives/move";
import WindowData from "../../models/WindowData";
import File from "../file.vue";
import {closeWindow, focusWindow} from "../../store/app";

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
      oldPosition: null as null | Position
    }
  },
  computed: {
    left() { return `${this.data.position.left}px`; },
    top() { return `${this.data.position.top}px`; },
    zIndex() { return 10 + (this.data.position.index || 0); }
  },
  mounted() {
    this.setPosition(this.$el.getBoundingClientRect());
  },
  methods: {
    clickedWindow() {
      focusWindow(this.data);
    },
    setPosition({ left, top }: Position) {
      this.data.position.left = left;
      this.data.position.top = top;
    },
    onClose() {
      closeWindow(this.data);
    },
    toggleFullscreen() {
      this.data.fullscreen = !this.data.fullscreen;

      if(this.data.fullscreen) {
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
    margin-left: -1px;
    margin-right: -2px;
    margin-top: -1px;
  }
</style>
