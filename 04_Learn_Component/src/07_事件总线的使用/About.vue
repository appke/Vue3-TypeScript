<template>
  <div>
    About
    <button @click="btnClick">About按钮点击</button>
  </div>
</template>

<script>
import emitter from "./utils/eventbus"
  export default {
    methods: {
      btnClick() {
        console.log("About点击了---");
        emitter.emit("aboutClick", {name:"muk", age:31});
      }
    }
    
  }
</script>

<style scoped>

</style>