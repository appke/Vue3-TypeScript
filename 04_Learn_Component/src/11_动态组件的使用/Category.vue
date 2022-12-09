<template>
  <div>
    Category组件
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name: "category",
    data() {
      return {
        counter: 0,
      }
    },
    created() {
      console.log("Category组件 ----- created");
    },
    unmounted() {
      console.log("Category组件 ----- unmounted");
    },
  }
</script>

<style scoped>

</style>