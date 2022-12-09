<template>
  <div>
    <button @click="btnClick">Mk内部按钮</button>
    <h2>Mk内部的message: {{modelValue}}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      "modelValue": String | Number,
    },
    emits: ["update:modelValue"],
    methods: {
      btnClick() {
        this.$emit("update:modelValue", "4566");
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>