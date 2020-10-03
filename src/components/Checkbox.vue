<template>
  <div>
    <md-checkbox v-model="checkboxValue" @change="sendToParent">
      <h2>{{ name }}</h2>
    </md-checkbox>
  </div>
</template>

<script>
export default {
  props: ["name", "value"],
  data() {
    return {
      checkboxValue: this.value,
    };
  },
  methods: {
    sendToParent() {
      this.$emit("childToParent", {
        field: this.name,
        bool: this.checkboxValue,
      });
    },
  },
};
</script>

<style>

</style>
