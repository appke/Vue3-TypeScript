<template>
  <div>
    <h2>06_Provide和Inject</h2>
    <p>{{name}}-{{age}}</p>
  </div>
</template>

<script>
  export default {
    inject: ["name", "age"],
  }
</script>

<style scoped>

</style>