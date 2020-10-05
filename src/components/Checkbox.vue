<template>
  <md-checkbox v-model="checkboxBool" @change="sendToParent">
    <h2>{{ name }}</h2>
  </md-checkbox>
</template>

<script>
export default {
  props: {
    name: String,
    bool: Boolean
  },
  data() {
    return {
      checkboxBool: this.bool,
    };
  },
  methods: {
    sendToParent() {
      this.$emit("childToParent", {
        field: this.name,
        bool: this.checkboxBool,
      });
    },
  },
};
</script>

<style>
</style>
