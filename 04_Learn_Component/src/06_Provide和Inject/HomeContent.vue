<template>
  <div>
    <h2>06_Provide和Inject</h2>
    <p>{{name}} - {{age}} - {{length}}</p>
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "length"],
  }
</script>

<style scoped>

</style>