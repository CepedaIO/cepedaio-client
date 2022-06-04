<template>
  <Window data="">
    <img :src="src" class="w-full h-full" />
  </Window>
</template>

<script>
import Window from "./window";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Image',
  components: {Window},
  props: {
    src: String
  }
});
</script>
