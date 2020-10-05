<template>
  <div>
    <h2>Stormworks Career Settings customizer</h2>
    <form>
      <md-list>
        <div>
          <vue-select
            v-model="selectedPreset"
            :options="presets"
            :reduce="(label) => label.value"
            :clearable="false"
            :placeholder="'Presets'"
            @input="updateSettingsFromPreset"
          />
        </div>
        <md-list-item
          v-for="(value, name, i) in conditions"
          :key="`${value}` + i">
          <Checkbox :name="name" :bool="value" @childToParent="onChildClick" />
        </md-list-item>
        <div>
          <InputField
            v-for="(value, name, i) in currency"
            :key="`${value}` + i"
            :name="name"
            :value="value"
            @childToParent="onChildInput" />
        </div>
        <Modal
          title="Generate Lua File"
          :settings="conditions"
          :currency="currency" />
      </md-list>
    </form>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import InputField from "./InputField.vue";
import Modal from "./Modal.vue";
import vSelect from "vue-select";
import Vue from "vue";
import PRESETS_DATA from "../assets/presets.json";
import SETTINGS_DATA from "../assets/settings.json";

export default {
  name: "Page",
  components: {
    Checkbox,
    InputField,
    Modal,
    "vue-select": vSelect,
  },
  data() {
    return {
      settingsJson: SETTINGS_DATA,
      presetsJson: PRESETS_DATA,
      selectedPreset: "",
    };
  },
  computed: {
    conditions() {
      return this.settingsJson.conditions;
    },
    currency() {
      return this.settingsJson.currency;
    },
    presets() {
      return this.presetsJson;
    },
  },
  methods: {
    onChildClick(value) {
      this.updateSettings(value);
      this.selectedPreset = "Custom";
    },
    onChildInput(value) {
      this.updateCurrency(value);
      this.selectedPreset = "Custom"
    },
    updateSettings({ field, value }) {
      Vue.set(this.conditions, field, value);
    },
    updateCurrency({ field, value }) {
      Vue.set(this.currency, field, value);
    },
    updateSettingsFromPreset() {
      let settings = this.presets.filter((item) => {
        return item.value === this.selectedPreset;
      })[0].settings;
      for (const [key, value] of Object.entries(settings.conditions)) {
        this.updateSettings({ field: key, value: value });
      }

      for (const [key, value] of Object.entries(settings.currency)) {
        this.updateCurrency({ field: key, value: value });
      }
    },
  },
};
</script>

<style scoped></style>