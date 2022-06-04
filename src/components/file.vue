<template>
  <main
    class="File inline-flex flex-col items-center cursor-default py-1 box-border"
    :class="{
      'absolute': movable,
      active
    }"
    :style="{ left, top }"
    v-move="setPosition"
    @mousedown="onMouseDown"
    @dblclick="data.activated(data)"
    @click.stop="() => {}"
  >
    <section class="min-h-[55px] flex flex-col items-center justify-around">
      <div class="px-2 m-auto" v-if="data.icon">
        <i class="fa-2x" :class="data.icon" />
      </div>

      <img v-else-if="data.image" :src="data.image" class="max-w-[50px] m-auto" />

      <div class="px-2 m-auto font-bold" v-else-if="data.iconLabel">
        {{ data.iconLabel }}
      </div>

      <div class="px-1 mt-auto">
        {{ data.label || data.id }}
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../directives/move";
import FileData from "../models/FileData";
import {state} from "../store/app";
import WindowData from "../models/WindowData";
import FolderData from "../models/FolderData";

export default defineComponent({
  directives: { move },
  props: {
    data: {
      type: FileData,
      required: true
    },
    window: [WindowData, FolderData]
  },
  computed: {
    left() { return `${this.data.position.left}px`; },
    top() { return `${this.data.position.top}px`; },
    active() { return state.active && state.active === this.$el; }
  },
  mounted() {
    this.setPosition(this.$el.getBoundingClientRect());
    this.movable = true;
  },
  data() {
    return {
      movable: false
    }
  },
  methods: {
    onMouseDown() {
      state.active = this.$el;
    },
    setPosition({ top, left }: Position) {
      if(this.window) {
        this.data.position.left = left - this.window.position.left;
        this.data.position.top = top - this.window.position.top - 48;
      } else {
        this.data.position.left = left;
        this.data.position.top = top + window.scrollY!;
      }
    }
  }
});
</script>

<style scoped>
  .File {
    border: 2px solid transparent;
  }

  .active {
    background-color: #D8EAF9;
    border: 2px solid #DEEDF9;
  }
  .active:hover {
    background-color: #C4E0F6
  }
</style>
