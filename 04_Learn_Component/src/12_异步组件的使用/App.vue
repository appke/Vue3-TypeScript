<template>
  <div>
    <home></home>
    <async-category></async-category>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Home from "./Home.vue";
import Loading from "./Loading.vue";
// import AsyncCategory from "./AsyncCategory.vue";
// const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));
const AsyncCategory = defineAsyncComponent({
  loader: () => import("./AsyncCategory.vue"),
  loadingComponent: Loading,
});

export default {
  components: {
    Home,
    AsyncCategory,
  }

}
</script>

<style scoped>

</style>