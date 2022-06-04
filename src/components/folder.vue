<template>
  <main class="absolute w-1/2 border border-2 border-blue-300 box-border"
    :class="{ hidden }"
    :style="{ left, top }"
  >
    <header class="pl-5 pr-2 py-2 flex justify-between items-center box-border" v-move="onMove">
      <span>
        Projects
      </span>
      
      <ul class="flex">
        <li class="py-1 px-2">
          <i class="fas fa-horizontal-rule fa-sm" />
        </li>
        <li class="py-1 px-2">
          <i class="fal fa-square" />
        </li>
        <li class="py-1 px-2" @click="onClose">
          <i class="fal fa-times fa-lg" />
        </li>
      </ul>
    </header>

    <section class="min-h-[350px] bg-white">

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
      _left: 0,
      _top: 0
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