<template>
  <main class="Desktop">
    <File v-for="file in files" :key="file.id" :data="file" />
    <Folder v-for="folder in folders" :key="folder.id" :data="folder" />

    <WindowProvider v-for="[window, content, index] in windows" :window="window" :content="content" :index="index" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileData from "../models/FileData";
import {getAllWindows, openWindow} from "../store/app";
import EmbedData from "../models/EmbedData";
import FolderData from "../models/FolderData";
import File from "./file.vue";
import Folder from "./folder.vue";
import WindowProvider from "./windows/window-provider.vue";

export default defineComponent({
  name: 'Desktop',
  components: { File, Folder, WindowProvider },
  data: () => {
    return {
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
      ]
    }
  },
  computed: {
    windows: () => getAllWindows.value
  }
});
</script>

<style scoped>
</style>
