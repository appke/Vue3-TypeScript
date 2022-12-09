<template>
  <div>
    <mk-input v-model="message"></mk-input>
    <!-- <mk-input v-bind:modelValue="message" @update:modelValue="message = $envent"></mk-input> -->
    <h2>App的message: {{message}}</h2>

    <mk-input2 v-model="message"></mk-input2>
    <h2>App的message: {{message}}</h2>

    <mk-input3 v-model="message"></mk-input3>
    <h2>App的message: {{message}}</h2>
  </div>
</template>

<script>
import MkInput from "./MkInput.vue";
import MkInput2 from "./MkInput2.vue";
import MkInput3 from "./MkInput3.vue";
  export default {
    components: {
      MkInput,
      MkInput2,
      MkInput3
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