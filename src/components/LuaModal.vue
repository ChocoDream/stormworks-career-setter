<template>
  <div>
    <md-dialog :md-active.sync="showDialog" >
      <md-dialog-title class="md-layout-item">Paste in to Lua Playlist</md-dialog-title>
      <md-dialog-content class="lua-text">
        <LuaText :settings="settings" :currency="currency"></LuaText>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="selectAll"
          >Select all</md-button
        >
        <md-button class="md-primary" @click="showDialog = false"
          >Close</md-button
        >
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog = true">
    {{ title }}
    </md-button>
  </div>
</template>

<script>
import LuaText from './LuaText.vue'
export default {
  name: "DialogCustom",
  props: {
    title: String,
    settings: Object,
    currency: Object
  },
  data: () => ({
    showDialog: false,
  }),
  components:{
    LuaText
  },
  methods:{
    selectAll(){
      window.getSelection().selectAllChildren(document.querySelector('.lua-text'))
    }
  }
};
</script>

<style scoped>
.lua-text {
  background-color:#272624;
};
</style>
