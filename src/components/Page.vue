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
import PRESETS_DATA from "../assets/presets_data.json";

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
      conditions: {
        third_person: true,
        third_person_vehicle: true,
        vehicle_damage: true,
        player_damage: true,
        npc_damage: false,
        sharks: true,
        fast_travel: true,
        teleport_vehicle: true,
        rogue_mode: true,
        auto_refuel: true,
        megalodon: true,
        map_show_players: true,
        map_show_vehicles: true,
        show_3d_waypoints: true,
        show_name_plates: true,
        infinite_money: true,
        unlock_all_islands: true,
        unlock_all_components: true,
        infinite_batteries: true,
        infinite_fuel: true,
        engine_overheating: true,
        no_clip: true,
        map_teleport: true,
        cleanup_vehicle: true,
        clear_fow: true,
        vehicle_spawning: true,
        photo_mode: true,
        respawning: true,
        settings_menu_lock: true,
        despawn_on_leave: true,
      },
      currency: {
        cash: 25000,
        research: 20,
      },
      data: PRESETS_DATA,
      selectedPreset: "",
    };
  },
  computed: {
    presets() {
      return this.data;
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
