<template>
  <div>
    <input v-model="valueA">
    <input v-model="valueB">
  </div>
</template>

<script>
export default {
  props: { 
    modelValue: String, 
    title: String 
  },
  emits: ["update:modelValue", "update:title"],
  computed: {
    valueA: {
      set(event) {
        this.$emit("update:modelValue", event);
      },
      get() {
        return this.modelValue;
      }
    },
    valueB: {
      set(event) {
        this.$emit("update:title", event);
      },
      get() {
        return this.title;
      }
    }
  }
}
</script>

<style scoped>

</style>