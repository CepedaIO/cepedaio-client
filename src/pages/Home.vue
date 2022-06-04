<template>
  <main class="relative p-5">
    <h1 class="mb-8">AJ's Desktop</h1>

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


    <section class="absolute inset-0 z-10 flex flex-row p-2 pl-[165px]">
      <File v-for="file in files" :key="file.id" :data="file" />
      <Folder v-for="folder in folders" :key="folder.id" :data="folder" />

      <WindowProvider v-for="[window, content, index] in windows" :window="window" :content="content" :index="index" />
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
          files: [
            new FileData({
              id: 'Resume',
              icon: 'fas fa-file-pdf',
              activated: () => openWindow(new EmbedData({
                id: 'ResumePDF',
                label: 'PDF',
                src: '/Resume.pdf'
              }))
            }),
            new FileData({
              id: 'Github',
              icon:'fab fa-github',
              activated: () => window.open('https://github.com/ALJCepeda', '_blank')
            }),
            new FileData({
              id: 'LinkedIn',
              icon:'fab fa-linkedin',
              activated: () => window.open('https://linkedin.com/in/alfred-cepeda', '_blank')
            })
          ],
          folders: [
            new FolderData({
              id: 'Pictures',
              files: [
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210717_213807.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210801_125503.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210810_134007.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210813_165559.jpg"
              ].map((photo, index) => new FileData({
                id: `luna-${index}`,
                image: photo,
                activated() {
                  openWindow(new EmbedData({
                    id: `luna-${index}`,
                    src: photo
                  }));
                }
              }))
            }),
            new FolderData({
              id: "Contributions",
              files: [
                new FileData({
                  id: 'Springbig',
                  image: '/springbig.png',
                  activated: () => window.open('https://springbig.com/', '_blank')
                }),
                new FileData({
                  id: 'Universal Studios',
                  image: '/universalstudios.jfif',
                  activated: () => window.open('https://www.universalorlando.com/', '_blank')
                }),
                new FileData({
                  id: 'Electronic Arts',
                  image: '/ea.jfif',
                  activated: () => window.open('https://www.ea.com/', '_blank')
                }),
                new FileData({
                  id: 'Flight Schedule Pro',
                  image: '/flightschedule.gif',
                  activated: () => window.open('https://app.flightschedulepro.com/', '_blank')
                }),
                new FileData({
                  id: 'Urban Fort',
                  iconLabel: 'UB',
                  activated: () => window.open('http://urbanfort.com/', '_blank')
                }),
                new FileData({
                  id: 'Panera Bread',
                  image: '/panera.jfif',
                  activated: () => window.open('https://www.panerabread.com/', '_blank')
                }),
                new FileData({
                  id: '8 Bit Consulting',
                  image: '/8bit.png',
                  activated: () => window.open('https://www.facebook.com/8BitConsulting/', '_blank')
                }),
                new FileData({
                  id: 'RetireReady',
                  image: '/retireready.png',
                  activated: () => window.open('https://retireready.com/', '_blank')
                }),
                new FileData({
                  id: 'Blackbird Crow',
                  iconLabel: 'BC',
                  activated: () => window.open('https://blackbirdcrow.business.site/', '_blank')
                }),
                new FileData({
                  id: 'ReBaked',
                  image: '/rebaked.png',
                  activated: () => window.open('https://medium.com/@mfonisoarchibong1/monetization-of-skills-by-rebaked-108002601a61', '_blank')
                }),
                new FileData({
                  id: 'Bonzi',
                  image: '/bonzi.png',
                  activated: () => window.open('https://www.getapp.com/recreation-wellness-software/a/bonzi/', '_blank')
                }),
                new FileData({
                  id: 'Numedics',
                  image: '/numedics.jpg',
                  activated: () => window.open('https://www.numedics.com/', '_blank')
                })
              ]
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
      windows: () => getAllWindows.value
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
