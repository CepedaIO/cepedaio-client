<template>
  <main class="flex flex-row z-[100]">
    <div class="mx-auto bg-tertiary py-3 px-5 rounded-2xl flex flex-row gap-x-4">
      <File :data="resume" :movable="false" class="bounce"  />
      <File :data="github" :movable="false" />
      <File :data="linkedin" :movable="false" />
      <Folder :data="pictures" :movable="false" />
      <Folder :data="contributions" :movable="false" />
    </div>
  </main>
</template>

<script>
import {defineComponent} from "vue";
import FileData from "../../models/FileData";
import {openWindow} from "../../store/app";
import EmbedData from "../../models/EmbedData";
import FolderData from "../../models/FolderData";
import File from "../file.vue";
import Folder from "../folder.vue";
import {allWorkFiles} from "../../data/work";

export default defineComponent({
  name:'app-menu',
  components: { File, Folder },
  data: () => {
    return {
      resume: new FileData({
        id: 'Resume',
        icon: 'fas fa-file-pdf text-red-500',
        activated: () => openWindow(new EmbedData({
          id: 'ResumePDF',
          label: 'PDF',
          src: '/Resume.pdf',
          mime: 'application/pdf'
        }))
      }),
      github: new FileData({
        id: 'Github',
        icon: 'fab fa-github',
        activated: () => window.open('https://github.com/ALJCepeda', '_blank')
      }),
      linkedin: new FileData({
        id: 'LinkedIn',
        icon: 'fab fa-linkedin text-blue-500',
        activated: () => window.open('https://linkedin.com/in/alfred-cepeda', '_blank')
      }),
      pictures: new FolderData({
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
      contributions: new FolderData({
        id: "Contributions",
        files: allWorkFiles()
      })
    }
  }
});
</script>

<style scoped>

</style>
