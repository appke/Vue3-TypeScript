<template>
  <div>
    <show-names></show-names>
    <show-names>
      <template v-slot="slotProps">
        <button>{{slotProps.item}}-{{slotProps.index}}</button>
      </template>
    </show-names>
    <show-names>
      <template v-slot="slotProps">
        <strong>{{slotProps.item}}-{{slotProps.index}}</strong>
      </template>
    </show-names>
  </div>
</template>

<script>
import ShowNames from './ShowNames.vue';


  export default {
    components: {
      ShowNames
    }
  }
</script>

<style scoped>

</style>