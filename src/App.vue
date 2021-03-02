<template>
  <v-app>
    <Snackbar 
      :text="snackbarText"
      :color="snackbarColor"
      :snackbar="snackbar"
      @close="snackbar = false">
    </Snackbar>
    <LogInModal 
      :showDialog="!isLoggedIn"
      @triedLogIn="manageLogIn">
    </LogInModal>
    <v-app-bar color="light-green"app>
      <v-img
        class="mx-2"
        src="@/assets/logo.svg"
        max-height="150"
        max-width="150" contain
      ></v-img>
      <v-toolbar-title class="ml-2">
        | Case management
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="isLoggedIn">

        <v-toolbar-title class="ml-2">
          Welcome {{userName}}!
        </v-toolbar-title>
        <v-btn 
          icon
          @click="$store.commit('logOut')">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container 
        class="w-75"
        fluid>
        <Main></Main>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LogInModal from './components/LogInModal.vue'
import Main from './views/Main'

import Snackbar from './components/Snackbar.vue'

import { mapGetters } from 'vuex'

export default {
  data: () => ({
    snackbar: false,
    snackbarText: '',
    snackbarColor: ''
  }),
  methods: {
    manageLogIn(){
      this.snackbarText = this.isLoggedIn ? 'Logged In' : 'Invalid credentials'
      this.snackbarColor = this.isLoggedIn ? 'success' : 'error'
      this.snackbar = true
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      userName: 'userName'
    })
  },
  components: {
    Main,
    LogInModal,
    Snackbar
  },
};
</script>

<style>
.w-75{
  max-width: 75%
}
</style>
