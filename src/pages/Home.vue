<template>
  <main class="relative w-full h-full">
    <File v-for="file in files" :key="file.label" :self="file" />
    <Folder v-for="folder in folders" :key="folder.id" :self="folder" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { shuffle } from 'lodash';
import File, { FileData } from "../components/file.vue";
import Folder, { FolderData } from "../components/folder.vue";
import { folderStore } from "../store/folder";

export default defineComponent({
    name: "Home",
    components: { File, Folder },
    data() {
        return {
          files: [
            new FileData({
              class:'fa fa-folder',
              label: 'Projects',
              activated() { return folderStore.openFolder('projects') }
            }),
            new FileData({
              class:'fas fa-home',
              label:'Home',
              activated: () => console.log('activated home')
            })
          ],
          folders: [
            new FolderData({
              id: 'projects',
              label: 'Projects',
              files: [
                new FileData({
                  class:'fas fa-home',
                  label:'Home',
                  activated: () => console.log('activated nested home')
                })
              ]
            })
          ],
            remainingPhotos: [] as string[],
            currentPhoto: "",
            photos: [
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210717_213807.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210801_125503.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210810_134007.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210813_165559.jpg"
            ],
        }
    },
    mounted() {
        this.pickPhoto();
        setInterval(() => this.pickPhoto(), 5000);
    },
    methods: {
        pickPhoto() {
            if (this.remainingPhotos.length === 0)
                this.remainingPhotos = shuffle(this.photos);
            this.currentPhoto = this.remainingPhotos.pop() as string;
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
