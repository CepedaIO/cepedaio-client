<template>
  <main
    class="file inline-flex flex-col items-center cursor-default py-1 box-border"
    :class="{
      'absolute': movable,
      active
    }"
    :style="{ left, top }"
    v-move="onMove"
    @mousedown="onMouseDown"
    @dblclick="data.activated(data)"
    @click.stop="() => {}"
  >
    <div class="px-2" v-if="data.icon">
      <i class="fa-2x" :class="data.icon" />
    </div>

    <img v-else-if="data.image" :src="data.image" class="max-w-[50px]" />

    <div>
      {{ data.label || data.id }}
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../directives/move";
import FileData from "../models/FileData";
import { desktopStore } from "../store/desktop";

export default defineComponent({
  directives: { move },
  props: {
    data: {
      type: FileData,
      required: true
    },
    window: String
  },
  computed: {
    left() { return `${this.data.position.left}px`; },
    top() { return `${this.data.position.top}px`; },
    active() { return desktopStore.state.active && desktopStore.state.active === this.$el; }
  },
  mounted() {
    const { left, top } = this.$el.getBoundingClientRect();
    this.data.position.left = left;

    if(this.window) {
      this.data.position.top = top;
    }

    this.movable = true;
    desktopStore.register(this.data);
  },
  data() {
    return {
      movable: false
    }
  },
  methods: {
    onMouseDown() {
      desktopStore.state.active = this.$el;
    },
    onMove({ left, top }: { left:number, top:number }) {
      if(this.window) {
        const window = desktopStore.getWindow(this.window)!;

        this.data.position.left = left - window.position.left;
        this.data.position.top = top - window.position.top - 48;
      } else {
        this.data.position.left = left;
        this.data.position.top = top + window.scrollY!;
      }
    }
  }
});
</script>

<style scoped>
  .active {
    background-color: #D8EAF9;
    border: 2px solid #DEEDF9;
  }
  .active:hover {
    background-color: #C4E0F6
  }
</style>
