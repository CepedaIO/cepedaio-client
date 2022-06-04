<template>
  <main class="Home">
    <div>
      <h1 class="mb-8">AJ's Desktop</h1>
    </div>

    <section class="mb-5">
      Hello, my name's Alfred Cepeda. I'm a software engineer, gamer and sci fi enthusiast
      <br />
      In other words, I'm nerd.
      <br />
      I also have a cat named Luna, check her out in Pictures!
      <span class="text-green-500">Double click</span> to open it
    </section>

    <section class="flex flex-row flex-wrap gap-10">
      <section class="border-2 border-indigo-200 p-3 grow min-w-[350px]">
        <h2 class="text-indigo-300 mb-1">
          Front End Skills
        </h2>

        <div class="flex flex-col flex-wrap gap-x-6 justify-between">
          <div v-for="bar in frontEndBars" :key="bar.label" class="basis-5/12" >
            <h3>{{ bar.label }}</h3>
            <ProgressBar :percent="bar.percent" />
          </div>
        </div>
      </section>

      <section class="border-2 border-indigo-200 p-3 grow min-w-[350px]">
        <h2 class="text-indigo-300 mb-1">
          Back End Skills
        </h2>

        <div class="flex flex-col flex-wrap gap-x-6 justify-between">
          <div v-for="bar in backEndBars" :key="bar.label" class="basis-5/12" >
            <h3>{{ bar.label }}</h3>
            <ProgressBar :percent="bar.percent" />
          </div>
        </div>
      </section>

      <section class="border-2 border-indigo-200 p-3 grow min-w-[350px]">
        <h2 class="text-indigo-300 mb-1">
          Other Skills
        </h2>

        <div class="flex flex-col flex-wrap gap-x-6 justify-between">
          <div v-for="bar in otherBars" :key="bar.label" class="basis-5/12" >
            <h3>{{ bar.label }}</h3>
            <ProgressBar :percent="bar.percent" />
          </div>
        </div>
      </section>
    </section>


    <section class="z-10 flex flex-row">

    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import File from "../components/file.vue";
import Folder from "../components/folder.vue";
import Window from "../components/windows/window.vue";
import ProgressBar from "../components/progress-bar.vue";
import FileData from "../models/FileData";
import FolderData from "../models/FolderData";
import EmbedData from "../models/EmbedData";
import {getAllWindows, openWindow, state} from "../store/app";
import FolderWindow from "../components/windows/folder-window.vue";
import EmbedWindow from "../components/windows/embed-window.vue";
import WindowProvider from "../components/windows/window-provider.vue";

export default defineComponent({
    name: "Home",
    components: {WindowProvider, EmbedWindow, FolderWindow, File, Folder, Window, ProgressBar },
    data() {
        return {
          frontEndBars: [
            { label: 'Vue', percent: 85 },
            { label: 'Angular', percent: 70 },
            { label: 'React', percent: 35 },
            { label: 'CSS', percent: 90 },
            { label: 'Javascript', percent: 90 },
            { label: 'Analytics', percent: 75 },
            { label: 'SPA', percent: 80 },
            { label: 'SEO', percent: 55 },
            { label: 'Webpack', percent: 85 }
          ],
          backEndBars: [
            { label: 'NodeJS', percent: 90 },
            { label: 'Postgres', percent: 70 },
            { label: 'Docker', percent: 80 },
            { label: 'Elastic Search', percent: 45 },
            { label: 'Kubernetes', percent: 40 },
            { label: 'Typescript', percent: 85 },
            { label: 'Express', percent: 85},
            { label: 'Architecture/Infrastructure', percent:70 },
            { label: 'Profiling', percent: 80 }
          ],
          otherBars: [
            { label: 'AWS', percent: 35 },
            { label: 'Google Cloud', percent: 50 },
            { label: 'Linux', percent: 75 },
            { label: 'Ethereum', percent: 40 },
            { label: 'Web3', percent: 55 },
            { label: 'Haskell', percent: 45 },
            { label: 'Agile', percent: 80 },
            { label: 'iOS/Swift', percent: 65 },
          ],
          remainingPhotos: [] as string[],
          currentPhoto: "",
        }
    },
    mounted() {
        this.pickPhoto();
        setInterval(() => this.pickPhoto(), 5000);
    },
    methods: {
        pickPhoto() {
            /*if (this.remainingPhotos.length === 0)
                this.remainingPhotos = shuffle(this.photos);
            this.currentPhoto = this.remainingPhotos.pop() as string;*/
        }
    }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
