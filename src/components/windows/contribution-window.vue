<template>
  <Window :key="window.id" :data="window" :style="{ 'z-index': 10 + window.index }">
    <header class="max-w-[350px] float-left">
      <h1 class="text-center">{{ content.label || content.id}}</h1>
      <img :src="content.images.hero" />
    </header>

    <section>
      <h2>What did I do?</h2>

      <h3>Team Leadership</h3>
      <h4>
        Did some stuff
      </h4>
    </section>
  </Window>
</template>

<script lang="ts">
import Window from "./window.vue";
import { defineComponent } from "vue";
import WindowData from "../../models/WindowData";
import ContributionData from "../../models/ContributionData";

export default defineComponent({
  name: 'ContributionWindow',
  components: { Window },
  props: {
    window: WindowData,
    content: [ContributionData]
  }
});
</script>
