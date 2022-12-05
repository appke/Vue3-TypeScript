<template>
  <div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <button @click="incrementN">+N</button>
  </div>
</template>

<script>
export default {
  emits: ["addOne", "subOne", "addN"],
  methods: {
    decrement() {
      this.$emit("subOne")
    },

    increment() {
      this.$emit("addOne");
    },
   
    incrementN() {
      this.$emit("addN", 5)
    }
  }
}
</script>

<style scoped>

</style>