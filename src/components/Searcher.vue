<template>
  <v-autocomplete
    :items="cases"
    dense
    color="green"
    clearable
    chips
    item-text="searchText"
    item-value="clientName"
    label="Search cases">
    <template v-slot:item="data">
      <v-list-item-content @click="$emit('submitSearch', data.item)">
        <v-list-item-title v-html="data.item.clientName"></v-list-item-title>
        <v-list-item-subtitle v-html="data.item.industry"></v-list-item-subtitle>
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  props: {
    cases: Array
  },
}
</script>
