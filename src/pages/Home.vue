<template>
  <main class="relative p-5">
    <h1 class="text-center mb-8">Welcome to AJ's Desktop</h1>

    <section class="mb-3">
      Hello, my name's Alfred Cepeda. I'm a software engineer, gamer and sci fi enthusiast
      <br />
      In other words, I'm nerd.
    </section>

    <section class="border-2 border-indigo-200 p-3 mb-8">
      <h2 class="text-indigo-300 mb-1">
        Front End Skills
      </h2>

      <div class="flex flex-row flex-wrap gap-x-6 justify-between">
        <div v-for="bar in frontEndBars" :key="bar.label" class="basis-5/12" >
          <h3>{{ bar.label }}</h3>
          <ProgressBar :percent="bar.percent" />
        </div>
      </div>
    </section>

    <section class="border-2 border-indigo-200 p-3 mb-8">
      <h2 class="text-indigo-300 mb-1">
        Back End Skills
      </h2>

      <div class="flex flex-row flex-wrap gap-x-6 justify-between">
        <div v-for="bar in backEndBars" :key="bar.label" class="basis-5/12" >
          <h3>{{ bar.label }}</h3>
          <ProgressBar :percent="bar.percent" />
        </div>
      </div>
    </section>

    <section class="border-2 border-indigo-200 p-3">
      <h2 class="text-indigo-300 mb-1">
        Back End Skills
      </h2>

      <div class="flex flex-row flex-wrap gap-x-6 justify-between">
        <div v-for="bar in backEndBars" :key="bar.label" class="basis-5/12" >
          <h3>{{ bar.label }}</h3>
          <ProgressBar :percent="bar.percent" />
        </div>
      </div>
    </section>

    <section class="absolute inset-0 z-10 flex flex-row gap-3 p-2">
      <File v-for="file in files" :key="file.id" :data="file" />
      <Folder v-for="folder in folders" :key="folder.id" :data="folder" />

      <Window v-for="(window, index) in windows" :key="window.id" :data="window" :style="{ 'z-index': 10 + index }">
        <div class="relative w-full h-full gap-5 flex flex-row p-2" v-if="window.type === 'FolderData'">
          <File v-for="file in window.files" :key="file.id" :data="file" :window="window"/>
          <Folder v-for="folder in window.folders" :key="folder.id" :data="folder" />
        </div>

        <img class="relative w-auto h-full m-auto" v-if="window.type === 'ImageData'" :src="window.src" />
      </Window>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import File from "../components/file.vue";
import Folder from "../components/folder.vue";
import Window from "../components/window.vue";
import ProgressBar from "../components/progress-bar.vue";
import FileData from "../models/FileData";
import FolderData from "../models/FolderData";
import ImageData from "../models/ImageData";
import {openWindow, state} from "../store/app";

export default defineComponent({
    name: "Home",
    components: { File, Folder, Window, ProgressBar },
    data() {
        return {
          frontEndBars: [
            { label: 'Vue', percent: 85 },
            { label: 'Angular', percent: 70 },
            { label: 'React', percent: 35 },
            { label: 'CSS', percent: 90 },
            { label: 'Javascript', percent: 90 }
          ],
          backEndBars: [
            { label: 'NodeJS', percent: 90 },
            { label: 'Postgres', percent: 70 },
            { label: 'Docker', percent: 80 },
            { label: 'Elastic Search', percent: 45 },
            { label: 'Kubernetes', percent: 40 },
            { label: 'Typescript', percent: 85 }
          ],
          otherBars: [
            { label: 'AWS', percent: 35 },
            { label: 'Google Cloud', percent: 50 },
            { label: 'Linux', percent: 75 },
            { label: 'Ethereum', percent: 40 },
            { label: 'Web3', percent: 55 },
            { label: 'Haskell', percent: 65 },
            { label: 'Agile', percent: 80 }
          ],
          files: [
            new FileData({
              id: 'home',
              icon:'fas fa-home',
              label:'Home',
              activated: () => console.log('activated home')
            })
          ],
          folders: [
            new FolderData({
              id: 'picture',
              label: 'Pictures',
              files: [
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210717_213807.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210801_125503.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210810_134007.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210813_165559.jpg"
              ].map((photo, index) => new FileData({
                id: `luna-${index}`,
                label: `luna-${index}`,
                image: photo,
                activated() {
                  openWindow(new ImageData({
                    id: `luna-${index}`,
                    label: `luna-${index}`,
                    src: photo
                  }));
                }
              }))
            })
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
    },
    computed: {
      windows: () => state.windows
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
