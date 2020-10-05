<template>
  <span>
    <md-checkbox
      v-model="checkboxBool"
      @change="sendToParent"
      class="md-primary">
    </md-checkbox>
    <span>{{ formatName }}</span>
  </span>
</template>

<script>
export default {
  props: {
    name: String,
    bool: Boolean,
  },
  data() {
    return {
      checkboxBool: this.bool,
    };
  },
  computed: {
    formatName() {
      return this.name
        .split("_")
        .map((part) => {
          return part.slice(0, 1).toUpperCase() + part.slice(1);
        })
        .join(" ");
    },
  },
  methods: {
    sendToParent() {
      this.$emit("childToParent", {
        field: this.name,
        value: this.checkboxBool,
      });
    },
  },
};
</script>

<style scoped>
</style>
