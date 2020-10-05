<template>
  <div>
    <h2>Stormworks Career Settings customizer</h2>
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
    <div>
      <Checkbox
        v-for="(value, name, i) in conditions"
        :key="`${value}` + i"
        :name="name"
        :bool="value"
        @childToParent="onChildClick"
      />
    </div>
    <div>
      <InputField
        v-for="(value, name, i) in currency"
        :key="`${value}` + i"
        :name="name"
        :value="value"
        @childToParent="onChildInput"
      />
    </div>
    <Modal
      title="Generate Lua File"
      :settings="conditions"
      :currency="currency"
    />
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import InputField from "./InputField.vue";
import Modal from "./Modal.vue";
import vSelect from "vue-select";
import Vue from "vue";
import PRESETS_DATA from "../assets/presets.json";
import CURRENCY_DATA from "../assets/currency.json";
import CONDITIONS_DATA from "../assets/conditions.json";

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
      conditionsJson: CONDITIONS_DATA,
      currencyJson: CURRENCY_DATA,
      presetsJson: PRESETS_DATA,
      selectedPreset: "",
    };
  },
  computed: {
    conditions() {
      return this.conditionsJson;
    },
    currency() {
      return this.currencyJson;
    },
    presets() {
      return this.presetsJson;
    },
  },
  methods: {
    onChildClick(value) {
      this.updateSettings(value);
    },
    onChildInput(value) {
      this.updateCurrency(value);
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
