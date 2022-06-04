<template>
  <main style="background: blue">
    <Icon>
      <template #showcase>
        <i class="fas fa-home fa-2x"></i>
      </template>

      <template #label>
        Home
      </template>
    </Icon>

    <Icon>
      <template #showcase>
        <i class="fas fa-home fa-2x"></i>
      </template>

      <template #label>
        Home
      </template>
    </Icon>

    <Icon>
      <template #showcase>
        <i class="fas fa-home fa-2x"></i>
      </template>

      <template #label>
        Home
      </template>
    </Icon>

    <Icon>
      <template #showcase>
        <i class="fas fa-home fa-2x"></i>
      </template>

      <template #label>
        Home
      </template>
    </Icon>
  </main>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { shuffle } from 'lodash';
import Icon from "../components/icon.vue";

interface HomePageData {
  remainingPhotos: string[]
  currentPhoto: string
  photos: string[]
}

export default defineComponent({
    name: "Home",
    data() {
        return {
            remainingPhotos: [],
            currentPhoto: "",
            photos: [
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210717_213807.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210801_125503.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210810_134007.jpg",
                "https://storage.googleapis.com/cepedaio.appspot.com/luna/20210813_165559.jpg"
            ],
        } as HomePageData;
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
    },
    components: { Icon }
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
