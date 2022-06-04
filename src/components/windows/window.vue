<template>
  <main class="Window absolute flex flex-col shadow-xl"
    :style="{ left, top }"
    :class="{
      'w-screen h-screen': data.fullscreen
    }"
    @click="clickedWindow"
  >
    <header class="pl-5 pr-2 py-2 flex justify-between items-center z-10 w-full" v-move="setPosition" @dblclick="toggleFullscreen">
      <span>
        {{ data.label || data.id }}
      </span>

      <ul class="flex">
        <li class="py-1 px-2">
          <i class="fas fa-horizontal-rule fa-sm" />
        </li>
        <li class="py-1 px-2" @click="toggleFullscreen">
          <i class="fal fa-square" />
        </li>
        <li class="py-1 px-2" @click.stop="onClose">
          <i class="fal fa-times fa-lg" />
        </li>
      </ul>
    </header>

    <section
      class="bg-white border border-2 border-blue-300 overflow-hidden"
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
    background-color: #0078D7;
    margin-left: -1px;
    margin-right: -2px;
    margin-top: -1px;
  }
</style>
