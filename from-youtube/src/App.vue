<template>
  <form @submit.prevent="searchITunes(searchText)">
    <input type="text" v-model="searchText" />
    <button @click="searchITunes(searchText)">Search</button>

    <div v-if="albums.results">
      <div v-for="album in albums.results" :key="album.artistId">
        <theShowAlbum v-if="album" :album="album"></theShowAlbum>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { searchTunes } from "./services/itunes.api";
import { ItunesTypes } from "./types/ITunes.interface";
import theShowAlbum from "./components/theShowAlbum.vue";

export default defineComponent({
  name: "App",
  components: {
    theShowAlbum,
  },
  setup() {
    let response = reactive<{ albums: ItunesTypes }>({
      albums: {
        resultCount: 0,
        results: [],
      },
    });
    let searchText = ref("");

    const searchITunes = async (text: string) => {
      response.albums = await searchTunes(text);
    };

    return {
      searchITunes,
      ...toRefs(response),
      searchText,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
