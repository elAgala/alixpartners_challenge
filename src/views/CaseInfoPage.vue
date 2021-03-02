<template>
  <div class="case-info">
    <DeleteCaseModal
      :showDialog="showDialog"
      @close="showDialog = false"
      @confirm="$emit('caseDeleted', aCase)">
    </DeleteCaseModal>
    <v-card
      class="pa-8"
      outlined
      elevation="6">
      <v-row 
        align="center"
        justify="space-between">
        <v-btn 
          @click="$emit('goBack')"
          color="primary">
          Back
        </v-btn>
        <div class="modifying-buttons">
          <v-btn 
            v-if="mode == 'edit'"
            :disabled="!isAbleToModify"
            @click="showDialog = true"
            class="mr-3"
            color="error">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
          <v-btn 
            v-if="mode == 'edit'"
            :disabled="!isAbleToModify"
            @click="editActivated = true"
            color="warning">
            <v-icon>
              mdi-account-edit 
            </v-icon>
          </v-btn>
        </div>
      </v-row>
      <CaseForm 
        ref="caseForm"
        :disabled="disableForm()" 
        :aCase="Object.assign({}, aCase)" @formSubmitted="$emit(getEventName(), $event)">
      </CaseForm>
      <v-spacer></v-spacer>
      <v-row 
        align="center"
        justify="end">
        <v-btn 
          v-if="mode === 'edit'"
          class="mr-2"
          color="error"
          :disabled="disableForm()"
          @click="editActivated = false">
          Cancel
        </v-btn>
        <v-btn 
          class="mr-2"
          :disabled="disableForm()"
          @click="$refs.caseForm.submitForm()"
          color="success">
          Submit
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import CaseForm from '../components/CaseForm.vue'
import DeleteCaseModal from '../components/DeleteCaseModal.vue'

export default {
  data: () => ({
    editActivated: false,
    showDialog: false
  }),
  props: {
    aCase: Object,
    mode: String // add, edit
  },
  computed: {
    isAbleToModify(){
      if(this.mode != 'edit') return false
      const userEmail = this.$store.getters.userEmail
      return this.aCase.isTheCreator(userEmail)
    },
  },
  methods: {
    getEventName(){
      return this.mode == 'edit' ? 'caseEdited' : 'caseAdded'
    },
    disableForm(){
      return !this.editActivated && this.mode == 'edit'
    }
  },
  components: {
    CaseForm,
    DeleteCaseModal
  }
}
</script>
