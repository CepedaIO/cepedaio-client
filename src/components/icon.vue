<template>
  <movable @dblclick="self.activated(self)">
    <div class="px-2">
      <i class="fa-2x" :class="self.class" />
    </div>
    
    <div>
      {{ self.label }}  
    </div>
  </movable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import movable from "./movable.vue";

export class IconData {
  class!: string;
  label!: string;
  activated!: (self:this) => void;

  constructor(self: IconData) { Object.assign(this, self) }
}

export default defineComponent({
  components: { movable },
  props: {
    self: {
      type: IconData,
      required: true
    }
  }
});
</script>