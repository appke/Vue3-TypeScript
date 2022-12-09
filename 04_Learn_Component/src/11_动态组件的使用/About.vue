<template>
  <div>
    About组件
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        counter: 0,
      }
    },
    created() {
      console.log("About组件 ----- created");
    },
    unmounted() {
      console.log("About组件 ----- unmounted");
    },
    activated() {
      console.log("About组件 ----- activated");
    },
    deactivated() {
      console.log("About组件 ----- deactivated");
    },
  }
</script>

<style scoped>

</style>