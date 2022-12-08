<template>
  <div @click="divClick">
    Home组件 {{name}} -- {{age}}
    <!-- <button @click="divClick">divClick</button> -->
  </div>
</template>

<script>
  export default {
    emits: ["pageClick"],
    props: {
      name: {
        type: String,
        default: "",
      },
      age: {
        type: Number,
        age: 0,
      }
    },
    methods: {
      divClick() {
        this.$emit("pageClick");
      }
    }
    
  }
</script>

<style scoped>

</style>