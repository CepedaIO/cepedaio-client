<template>
  <main 
    class="icon inline-flex flex-col items-center cursor-default py-1 box-border"
    :class="{ 
      'absolute': movable,
      active
    }"
    :style="{ left, top }"
    v-move="onMove"
    @mousedown="onMouseDown"
    @click.stop="() => {}"
  >  
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../directives/move";
import { iconStore } from "../store/icons";

export default defineComponent({
  directives: { move },
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
    active() { return iconStore.active && iconStore.active === this.$el; }
  },
  mounted() {
    const { left, top } = this.$el.getBoundingClientRect();
    this._left = left; 
    this._top = top;
    this.movable = true;
  },
  methods: {
    onMouseDown() {
      iconStore.active = this.$el;
    },
    onMove(options:any) {
      this._left = options.left;
      this._top = options.top;
    }
  }
});
</script>

<style scoped>
  .icon {
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