<template>
  <div>
    <p>{{ count }}</p>
    <ControlBar @add-count="addCount" @reset-count="resetCount" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import ControlBar from "./ControlBar.vue";
import fetchCount from "../fetchCount";

export default defineComponent({
  components: {
    ControlBar,
  },
  props: {
    limit: {
      type: Number,
      required: true,
    },
    alertMessageOnLimit: {
      type: String,
      required: false,
      default: "can not go higher",
    },
  },
  setup(props) {
    const count = ref<number | null>(null);

    onMounted(() => {
      fetchCount((initialCount) => {
        count.value = initialCount;
      });
    });

    function addCount(): void {
      if (count.value !== null) {
        if (count.value >= props.limit) {
          alert(props.alertMessageOnLimit);
        }
        count.value += 1;
      } else {
        count.value = 1;
      }
    }
    function resetCount(): void {
      count.value = 0;
    }

    return {
      count,
      addCount,
      resetCount,
    };
  },
});
</script>
