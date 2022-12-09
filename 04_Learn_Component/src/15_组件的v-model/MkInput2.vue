<template>
  <div>
    <input :value="modelValue" @input="btnClick">
    <h2>Mk2内部的message: {{modelValue}}</h2>
  </div>
</template>

<script>
  export default {
    props: ["modelValue"],
    emits: ["update:modelValue"],
    methods: {
      btnClick(event) {
        this.$emit("update:modelValue", event.target.value);
      }
    }
  }
</script>

<style scoped>

</style>