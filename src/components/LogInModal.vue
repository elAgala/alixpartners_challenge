<template>
  <Modal :dialog="showDialog">
    <v-card>
      <v-container>
        <v-card-title class="headline grey lighten-2">
          Sign in
        </v-card-title>
        <v-form
          class="pa-3"
          ref="logInForm">
          <v-text-field
            color="green"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
          ></v-text-field>
          <v-text-field
            color="green"
            v-model="password"
            :rules="[v => !!v || 'Password is required']"
            type="password"
            label="Password"
          ></v-text-field>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="logIn"
          >
            Sign in
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  data: () => ({
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  props: {
    showDialog : Boolean
  },
  methods: {
    logIn(){
      if(!this.$refs.logInForm.validate()) return
      this.$store.commit('logIn', {email: this.email, password: this.password})
      this.$emit('triedLogIn')
    }
  },
  components: {
    Modal,
  }
}
</script>
