<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>
      <md-dialog-content>

      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save as txt</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog = true"> {{title}} </md-button>
  </div>
</template>

<script>
  export default {
    name: 'DialogCustom',
    props: {
      title: String,
    },
    data: () => ({
      showDialog: false
    })
  }
</script>

<style scoped>
</style>
