<template>
  <div>
    <h2>HomeContent</h2>
  </div>
</template>

<script>
import emitter from "./utils/eventbus";
  export default {
    created() {
      emitter.on("aboutClick", (info) => {
        console.log('info :>> ', info);
      });
    }
  }
</script>

<style scoped>

</style>