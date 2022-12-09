<template>
  <div>
    NavBar组件
    <button @click="getParentAndRoot">获取父组件或根组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "我是NavBar里的message"
      }
    },
    methods: {
      getParentAndRoot() {
        console.log(this.$parent);
        console.log(this.$root);
      }
    }
  }
</script>

<style scoped>

</style>