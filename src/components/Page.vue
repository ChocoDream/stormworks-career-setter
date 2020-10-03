<template>
  <div>
    <h2>Stormworks Career Settings customizer</h2>
    <div>
      <Checkbox
        v-for="(value, name, i) in settings"
        :key="`${value}` + i"
        :name="name"
        :value="value"
        class="checkbox"
        @childToParent="onChildClick"
      />
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import Vue from "vue";
export default {
  name: "Page",
  components: {
    Checkbox,
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
      this.updateField(value);
    },
    updateField({ field, bool }) {
      Vue.set(this.settings, field, bool);
    },
  },
};
</script>

<style scoped>
.checkbox{
  display:flex;
}
</style>
