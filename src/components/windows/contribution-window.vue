<template>
  <Window :key="window.id" :data="window">
    <main class="ContributionWindow h-full flex flex-col">
      <header class="text-center mb-5">
        <a :href="content.link" target="_blank">
          <img :src="content.image" />
        </a>
        <a :href="content.link" target="_blank">
          {{ content.link }}
        </a>
        <span>{{ content.start }} - {{ content.end }}</span>
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
      return form
    }
  }
});
</script>
