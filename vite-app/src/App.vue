<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ slogan }}</h1>

    <Counter :limit="5" alert-message-on-limit="can not go higher than 5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Counter from "./components/Counter.vue";

export default defineComponent({
  components: {
    Counter,
  },
  setup() {
    interface AppInfo {
      name: string;
      slogan: string;
    }

    const appInfo: AppInfo = reactive({
      name: "counter",
      slogan: "an app you can count on",
    });

    return {
      ...toRefs(appInfo),
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
