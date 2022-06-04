<template>
  <main class="absolute border border-2 border-blue-300 box-border overflow-hidden"
    :class="{ 
      hidden,
      'w-1/2 h-1/2': !fullscreen,
      'w-full h-full': fullscreen
    }"
    :style="{ left, top }"
  >
    <header class="pl-5 pr-2 py-2 flex justify-between items-center box-border" v-move="onMove" @dblclick="toggleFullscreen">
      <span>
        Projects
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

    <section class="h-full bg-white">

    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../directives/move";
import { folderStore } from "../store/folder";

export default defineComponent({
  name: 'Folder',
  directives: { move },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      movable: false,
      fullscreen: false,
      _left: 0,
      _top: 0,
      oldLeft: 0,
      oldTop: 0
    }
  },
  computed: {
    left() { return `${this._left}px`; },
    top() { return `${this._top}px`; },
    hidden() { return !folderStore.state.active.includes(this.name); }
  },
  mounted() {
    const { left, top } = this.$el.getBoundingClientRect();

    this._left = left; 
    this._top = top;
  },
  methods: {
    onMove(options:any) {
      this._left = options.left;
      this._top = options.top;
    },
    onClose() {
      folderStore.closeFolder(this.name);
    },
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;

      if(this.fullscreen) {
        this.oldLeft = this._left;
        this.oldTop = this._top;
        this._left = 0;
        this._top = 0;
      } else {
        this._left = this.oldLeft;
        this._top = this.oldTop;
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