<template>
  <div>
    <h2 ref="title">{{message}}</h2>
    <button @click="btnClick">修改message</button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello Vue3"
      }
    },
    methods: {
      btnClick() {
        this.message = "你好啊,李银河!"
      }
    },
    beforeCreate() {
      console.log("home beforeCreate");
    },
    created() {
      console.log("home created");
    },
    beforeMount() {
      console.log("home beforeMount");
    },
    mounted() {
      console.log("home mounted");
    },
    beforeUnmount() {
      console.log("home beforeUnmount");
    },
    unmounted() {
      console.log("home unmounted");
    },
    beforeUpdate() {
      console.log("beforeUpdate, ", this.$refs.title.innerHTML);
      console.log("home beforeUpdate");
    },
    updated() {
      console.log("updated, ", this.$refs.title.innerHTML);
      console.log("home updated");
    },
  }
</script>

<style scoped>

</style>