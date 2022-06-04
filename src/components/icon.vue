<template>
  <main 
    class="icon inline-flex flex-col items-center cursor-default py-1 box-border"
    :class="{ 
      'absolute': movable,
      active
    }"
    :style="{ left, top }"
    @mousedown.stop="onMouseDown"
    @mouseup.stop="onMouseUp"
    @click.stop="() => {}"
  >  
    <div class="px-2">
      <slot name="showcase" />
    </div>
    <slot name="label" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { iconStore } from "../store/icons";

export default defineComponent({
  data() {
    return {
      movable: false,
      _left: 0,
      _top: 0,
      innerLeft: 0,
      innerTop: 0
    }
  },
  computed: {
    left() { return `${this._left}px`; },
    top() { return `${this._top}px`; },
    active() { return iconStore.active === this; }
  },
  mounted() {
    const { left, top } = this.$el.getBoundingClientRect();
    this._left = left; 
    this._top = top;
    this.movable = true;
  },
  methods: {
    onMouseDown(event: MouseEvent) {
      const { left, top } = this.$el.getBoundingClientRect();
      this.innerLeft = event.clientX - left;
      this.innerTop = event.clientY - top;
      event.preventDefault();

      iconStore.active = this;

      document.addEventListener('mousemove', this.onMouseMove)
    },
    onMouseMove(event: MouseEvent) {
      this._left = event.clientX - this.innerLeft;
      this._top = event.clientY - this.innerTop;
    },
    onMouseUp() {
      document.removeEventListener('mousemove', this.onMouseMove)
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