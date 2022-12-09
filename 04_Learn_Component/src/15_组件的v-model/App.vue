<template>
  <div>
    <mk-input v-model="message"></mk-input>
    <!-- <mk-input v-bind:modelValue="message" @update:modelValue="message = $envent"></mk-input> -->
    <h2>App的message: {{message}}</h2>

    <mk-input2 v-model="message"></mk-input2>
    <h2>App的message: {{message}}</h2>

    <mk-input3 v-model="message"></mk-input3>
    <h2>App的message: {{message}}</h2>

    <mk-input4 v-model="message" v-model:title="title"></mk-input4>
    <h2>App的message: {{message}}</h2>
    <h2>App的title: {{title}}</h2>
  </div>
</template>

<script>
import MkInput from "./MkInput.vue";
import MkInput2 from "./MkInput2.vue";
import MkInput3 from "./MkInput3.vue";
import MkInput4 from "./MkInput4.vue";
  export default {
    components: {
      MkInput,
      MkInput2,
      MkInput3,
      MkInput4,
    },
    data() {
      return {
        message: "Hello World",
        title: "second"
      }
    }
  }
</script>

<style scoped>

</style>