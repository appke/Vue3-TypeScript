<template>
  <div>
    <input v-model="value">
    <h2>Mk3内部的message: {{ modelValue }}</h2>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    value: {
      set(event) {
        this.$emit("update:modelValue", event)
      },
      get() {
        return this.modelValue;
      }
    }
  }
}
</script>

<style scoped>

</style>