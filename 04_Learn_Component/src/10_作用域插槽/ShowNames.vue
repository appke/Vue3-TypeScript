<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index">{{item}}</slot>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        names: ["muk", "Kobe", "James", "Curry"]
      }
    },
  }
</script>

<style scoped>

</style>