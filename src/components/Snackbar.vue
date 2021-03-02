<template>
  <v-snackbar
    @input="$emit('close')"
    :color="color"
    :value="snackbar">
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    snackbar: Boolean,
    text: String,
    color: String
  }
}
</script>
