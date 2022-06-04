<template>
  <main @click="onClick">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fileStore } from "./store/file";

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
      fileStore.active = null;
    }
  }
});
</script>

<style>
</style>
