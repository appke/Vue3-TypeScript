<template>
  <div>
    <home></home>
    <asyncCategory></asyncCategory>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Home from "./Home.vue"
// import AsyncCategory from "./AsyncCategory.vue";
const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))

export default {
  components: {
    Home,
    AsyncCategory,
  }

}
</script>

<style scoped>

</style>