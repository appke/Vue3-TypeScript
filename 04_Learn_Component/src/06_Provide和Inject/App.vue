<template>
  <div>
    <home></home>
    <input type="text" v-model="name">
    <button @click="addName">增加</button>
    <p>{{names}}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      name: "abc",
      names: ["Kobe", "james"]
    }
  },
  provide() {
    return {
      name: "muk",
      age: "31",
      length: computed(() => this.names.length),
    }
  },
  methods: {
    addName() {
      this.names.push(this.name);
    }
  }
}
</script>

<style scoped>

</style>