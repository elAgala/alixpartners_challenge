<template>
  <v-row>
    <v-col 
      v-for="(aCase, index) in cases"
      :key="index"
      cols="3">
      <CaseCard 
        :aCase='aCase'
        @caseClicked="$emit('caseClicked', aCase)">
      </CaseCard>
    </v-col>
  </v-row>
</template>

<script>
import CaseCard from '../components/CaseCard.vue'

export default {
  data: () => ({
  }),
  props: {
    cases: Array
  },
  components: {
    CaseCard
  }
}
</script>
