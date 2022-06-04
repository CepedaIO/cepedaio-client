<template>
  <main
    class="File inline-flex flex-col items-center cursor-default py-1 box-border"
    :class="{
      'absolute': isMovable,
      'bg-selected border-2 border-white': active
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

      <img v-else-if="data.image" :src="data.image" :alt="data.label || data.icon" class="max-w-[50px] m-auto" />

      <div class="px-2 m-auto font-bold" v-else-if="data.iconLabel">
        {{ data.iconLabel }}
      </div>

      <div class="px-1 mt-auto text-xs">
        {{ data.label || data.id }}
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../directives/move";
import FileData from "../models/FileData";
import {isActive, setActive} from "../store/app";
import WindowData from "../models/WindowData";

export default defineComponent({
  directives: { move },
  props: {
    data: {
      type: FileData,
      required: true
    },
    movable: {
      type: Boolean,
      default: true
    },
    window: WindowData
  },
  computed: {
    left() { return `${this.data.position.left}px`; },
    top() { return `${this.data.position.top}px`; },
    active() { return isActive(this.$el); }
  },
  mounted() {
    const bounds = this.$el.getBoundingClientRect();

    if(this.movable) {
      this.setPosition({
        left: this.window ? bounds.left : bounds.left + 135,
        top: this.window ? bounds.top : bounds.top - 10
      });
      this.isMovable = true;
    }
  },
  data() {
    return {
      isMovable: false
    }
  },
  methods: {
    onMouseDown() {
      setActive(this.$el);
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
