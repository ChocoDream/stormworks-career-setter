<template>
  <md-field>
    <label> {{ name }} </label>
    <md-input v-model="inputValue" @change="sendToParent"></md-input>
  </md-field>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number,
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    sendToParent() {
      this.$emit("childToParent", {
        field: this.name,
        value: this.inputValue,
      });
    },
  },
};
</script>

<style>
</style>