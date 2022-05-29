<template>
  <div>
    <button @click="$emit('add-count')">Add</button>
    <button @click="$emit('reset-count')">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["add-count", "reset-count"],
});
</script>
