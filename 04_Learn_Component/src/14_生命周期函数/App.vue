<template>
  <div>
    <button @click="isShow = !isShow">切换Home组件</button>

    <home v-if="isShow"></home>


  </div>
</template>

<script>
import Home from "./Home.vue";
  export default {
    components: {
      Home,
    },
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>

</style>