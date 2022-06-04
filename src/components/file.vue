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
    @dblclick="self.activated(self)"
    @click.stop="() => {}"
  >
    <div class="px-2">
      <i class="fa-2x" :class="self.class" />
    </div>
    
    <div>
      {{ self.label }}  
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import move from "../directives/move";
import { folderStore } from "../store/folder";
import { iconStore } from "../store/icons";

export class FileData {
  class!: string;
  label!: string;
  activated!: (self:this) => void;

  constructor(self: FileData) { Object.assign(this, self) }
}

export default defineComponent({
  directives: { move },
  props: {
    self: {
      type: FileData,
      required: true
    },
    parent: String
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
  data() {
    return {
      movable: false,
      _left: 0,
      _top: 0
    }
  },
  methods: {
    onMouseDown() {
      iconStore.active = this.$el;
    },
    onMove(options:any) {
      if(this.parent) {
        const folder = folderStore.state.folders.get(this.parent)!;

        this._left = options.left - folder.left;
        this._top = options.top - folder.top - 48;
      } else {
        this._left = options.left;
        this._top = options.top;
      }
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