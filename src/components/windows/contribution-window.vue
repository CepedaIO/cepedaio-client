<template>
  <Window :key="window.id" :data="window">
    <main class="ContributionWindow h-full flex flex-col">
      <header class="text-center mb-1">
        <a :href="content.link" target="_blank">
          <img v-if="typeof content.image === 'object'" :src="content.image.hero" :alt="content.link" class="max-h-[125px] m-auto" />
          <img v-else-if="content.image" :src="content.image" :alt="content.link" class="max-h-[125px] m-auto"/>
          <span v-else-if="content.iconLabel" class="text-7xl">{{ content.iconLabel }}</span>
        </a>
        <div class="mt-2">
          {{ startStr}}
          <i class="fa-solid fa-arrow-right"></i>
          {{ endStr }}
        </div>
      </header>

      <section class="overflow-auto p-2 pl-5">
        <section class="grid grid-cols-3 text-center gap-2 mb-2">
          <div v-for="technology in content.technologies"> {{ technology }}</div>
        </section>

        <section class="mb-2">
          {{ content.description }}
        </section>

        <ul class="mb-5 list-disc ml-5">
          <li v-for="point in content.points" class="mb-2">{{ point }}</li>
        </ul>
      </section>
    </main>
  </Window>
</template>

<script lang="ts">
import Window from "./window.vue";
import { defineComponent } from "vue";
import { format } from "date-fns";
import WindowData from "../../models/WindowData";
import ContributionData from "../../models/ContributionData";

export default defineComponent({
  name: 'ContributionWindow',
  components: { Window },
  props: {
    window: {
      type: WindowData,
      required: true
    },
    content: {
      type: ContributionData,
      required: true
    }
  },
  computed: {
    startStr() {
      return format(this.content.start, 'yyyy-MM');
    },
    endStr() {
      return this.content.end ? format(this.content.end, "yyyy-MM") : 'Present';
    }
  }
});
</script>
