<template>
  <main class="flex flex-col w-screen h-screen overflow-hidden" @click="onClick">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { iconStore } from "./store/icons";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      navigation: [
        { icon: "fa-home", url: "/" },
        { icon: "fa-toolbox", url: "/tools" },
        { icon: "fa-blog", url: "/blog" },
      ],
    };
  },
  methods: {
    onClick() {
      iconStore.active = null;
    }
  }
});
</script>

<style>
</style>
