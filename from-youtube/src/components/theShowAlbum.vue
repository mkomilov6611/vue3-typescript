<template>
  <h3>Album Name: {{ album.collectionName }}</h3>
  <h5>Artwork</h5>
  <img :src="album.artworkUrl100" alt="Album Image" />
  <h5>Price: {{ album.collectionPrice }}</h5>
</template>

<script lang="ts">
import { Result } from "../types/ITunes.interface";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    album: {
      type: Object as PropType<Result>,
      required: true,
    },
  },
});
</script>
