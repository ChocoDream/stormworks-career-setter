<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
import Page from "./components/Page.vue";

export default {
  name: "App",
  components: {
    Page,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root{
  --function:#55d4d2;
  --boolean: #b6307b;
  --number:#9e754f;
  --string:#5be874;
  --comment: #636260;
};
</style>
