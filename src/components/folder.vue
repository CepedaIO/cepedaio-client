<template>
  <movable @dblclick="self.activated">
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

export default defineComponent({
  components: { movable }
});
</script>