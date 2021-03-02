<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <slot></slot>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean
  }
}
</script>
