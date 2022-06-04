<template>
  <main style="background: blue">
    <Icon v-for="icon in icons" :key="icon.label" :self="icon" />

    <Folder name="projects" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { shuffle } from 'lodash';
import Icon, { IconData } from "../components/icon.vue";
import Folder from "../components/folder.vue";
import { folderStore } from "../store/folder";

export default defineComponent({
    name: "Home",
    components: { Icon, Folder },
    data() {
        return {
          icons: [
            new IconData({
              class:'fa fa-folder',
              label: 'Projects',
              activated: () => folderStore.openFolder('projects')
            }),
            new IconData({
              class:'fas fa-home',
              label:'Home',
              activated: () => console.log('activated home')
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
