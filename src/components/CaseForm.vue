<template>
  <v-container>
    <v-form 
      ref="caseForm"
      :disabled="disabled">
      <v-row align="center" class="my-3">
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field 
            color="green"
            v-model="aCase.clientName" :rules="[v => !!v || 'Client name is required']"
            label="Client name"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field 
            color="green"
            v-model="aCase.industry"
            :rules="[v => !!v || 'Industry is required']"
            label="Industry"
          ></v-text-field>
          </v-col> <v-col cols="12"
          sm="4"
        >
          <v-text-field 
            v-model="aCase.duration"
            color="green"
            :rules="[v => !!v || 'Duration is required']"
            label="Duration (weeks)"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" class="my-3">
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field 
            v-model="aCase.approach"
            :rules="[v => !!v || 'Approach is required']"
            color="green"
            label="Approach"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field 
            v-model="aCase.outcome"
            :rules="[v => !!v || 'Outcome is required']"
            color="green"
            label="Outcome (results)"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="aCase.employees"
            color="green"
            :rules="[v => !!v || 'Employees are required']"
            :items="employees"
            label="Employees involved"
            multiple
            dense
            chips
            persistent-hint
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field 
            v-model="aCase.situation"
            :rules="[v => !!v || 'Situation is required']"
            color="green"
            label="Situation"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { employees } from '../assets/defaultData.js'

export default {
  data: () => ({
    employees: employees,
  }),
  props: {
    aCase: Object,
    disabled: Boolean
  },
  methods: {
    submitForm(){
      const isFormValid = this.$refs.caseForm.validate()
      if(!isFormValid) return
      if(!this.aCase.creator) this.aCase.creator = this.$store.state.user
      this.$emit('formSubmitted', this.aCase)
    }
  }
}
</script>
