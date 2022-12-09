<template>
  <div>
    <mk-input v-model="message"></mk-input>
    <!-- <mk-input v-bind:modelValue="message" @update:modelValue="message = $envent"></mk-input> -->
    <h2>App的message: {{message}}</h2>
  </div>
</template>

<script>
import MkInput from "./MkInput.vue";
  export default {
    components: {
      MkInput,
    },
    data() {
      return {
        message: "Hello World",
      }
    }
  }
</script>

<style scoped>

</style>