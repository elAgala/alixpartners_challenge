<template>
  <Modal :dialog="showDialog">

    <v-card>
      <v-card-title class="headline">
        Are you sure you want to delete this case?
      </v-card-title>
      <v-card-text>There is no way back</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          text
          @click="$emit('close')"
        >
          Cancel
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="$emit('confirm')"
        >
          Sure
        </v-btn>
      </v-card-actions>
    </v-card>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  props: {
    showDialog : Boolean
  },
  components: {
    Modal
  }
}
</script>
