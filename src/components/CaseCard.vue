<template>
  <v-card
    outlined
    elevation="6"
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>{{aCase.durationText}}</div>
      <p class="display-1 text--primary">
        {{aCase.clientName}}
      </p>
      <p>{{aCase.industry}}</p>
      <div class="text--primary">
        {{aCase.situation}}
      </div>
      <span class="font-weight-light text--primary">{{aCase.employeesText}}</span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="green"
        @click="$emit('caseClicked')">
        More info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    aCase: Object
  }
}
</script>
