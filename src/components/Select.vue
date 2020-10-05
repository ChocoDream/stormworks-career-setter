<template>
  <md-field>
    <label>Select Preset</label>
    <md-select v-model="preset" name="preset" id="preset">
      <md-option
        v-for="(_preset, i) of presets"
        :key="`${_preset.value}` + i"
        :value="_preset.value"
        >{{ _preset.name }}</md-option
      >
    </md-select>
  </md-field>
</template>

<script>
export default {
  props: {
    presets: Array,
  },
  data() {
    return {
      preset: "classic",
    };
  },
};
</script>

<style></style>
