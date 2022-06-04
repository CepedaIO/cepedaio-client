<template>
  <main class="flex flex-row">
    <div class="mx-auto bg-tertiary py-3 px-5 rounded-2xl flex flex-row gap-x-4">
      <File :data="resume" :movable="false" />
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
import ContributionData from "../../models/ContributionData";
import File from "../file.vue";
import Folder from "../folder.vue";

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
        files: [
          new ContributionData({
            id: 'Springbig',
            images: {
              icon: '/springbig.logo.png',
              hero: '/springbig.hero.png'
            },
            href: 'https://springbig.com'
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
    }
  }
});
</script>

<style scoped>

</style>
