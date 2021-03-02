<template>
  <div class="main-container">
    <v-row class="mt-6" justify="center">
      <v-col cols="10">
        <Searcher 
          :cases="cases"
          @submitSearch="showCaseInfo($event, 'edit')">
        </Searcher>
      </v-col>
      <v-col cols="2">
        <v-btn 
          color="success"
          class="mt-2"
          @click="showCaseInfo({}, 'add')">
          Add
          <v-icon>
            mdi-plus-thick
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <transition name="fade" mode="out-in">
      <component 
        :is='actualComponent'
        :cases="cases"
        :aCase="selectedCase"
        :mode="formMode"
        @goBack="actualComponent = 'CasesPage'"
        @caseEdited="editCase"
        @caseDeleted="deleteCase"
        @caseAdded="addCase"
        @caseClicked="showCaseInfo($event, 'edit')"> </component>
    </transition>
  </div>
</template>

<script>
import CasesPage from './CasesPage';
import CaseInfoPage from './CaseInfoPage';

import Searcher from '../components/Searcher.vue';

import { Case } from '../models/Case.js'
import { initialCases } from '../assets/defaultData.js'

export default {
  data: () => ({
    actualComponent: 'CasesPage',
    cases: initialCases.map((aCase, index) => new Case(aCase, index)),
    selectedCase: {},
    formMode: ''
  }),
  methods: {
    addCase(aCase){
      const newId = this.cases[this.cases.length - 1].id + 1
      this.cases.push(new Case(aCase, newId))
      this.actualComponent = 'CasesPage'
    },
    editCase(aCase){
      const index = this.cases.findIndex(c => c.id == aCase.id)
      this.cases.splice(index, 1, new Case(aCase, aCase.id))
      this.actualComponent = 'CasesPage'
    },
    deleteCase(aCase){
      const index = this.cases.findIndex(c => c.id == aCase.id)
      this.cases.splice(index, 1)
      this.actualComponent = 'CasesPage'
    },
    showCaseInfo(aCase, mode){
      this.selectedCase = aCase
      this.formMode = mode
      this.actualComponent = 'CaseInfoPage'
    }
  },
  components: {
    CasesPage,
    CaseInfoPage,
    Searcher
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>
