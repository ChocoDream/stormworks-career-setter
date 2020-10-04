<template>
  <div>
    <h2>Stormworks Career Settings customizer</h2>
    <div>
      <Checkbox
        v-for="(value, name, i) in settings"
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
    <Modal title="Show Settings" />
    <button @click="saveFileToClient('settings.txt', 'text/plain')">
      Save file
    </button>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import InputField from "./InputField.vue";
import Modal from './Modal.vue'

import Vue from "vue";
import { convertToLuaTxt } from "../FileConverter";
export default {
  name: "Page",
  components: {
    Checkbox,
    InputField,
    Modal
  },
  data() {
    return {
      settings: {
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
    };
  },
  methods: {
    onChildClick(value) {
      this.updateSettings(value);
    },
    onChildInput(value) {
      this.updateCurrency(value);
    },
    updateSettings({ field, bool }) {
      Vue.set(this.settings, field, bool);
    },
    updateCurrency({ field, value }) {
      Vue.set(this.currency, field, value);
    },
    saveFileToClient(filename, contentType) {
      let content = convertToLuaTxt(this.settings, this.currency);
      //WORK ON THIS
      console.log("saving...");
      const a = document.createElement("a");
      const file = new Blob([content], { type: contentType });

      a.href = URL.createObjectURL(file);
      a.download = filename;
      a.click();

      URL.revokeObjectURL(a.href);
    },
  },
};
</script>

<style scoped>
</style>
