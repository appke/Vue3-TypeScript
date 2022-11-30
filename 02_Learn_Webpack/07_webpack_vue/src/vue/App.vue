<template id="my-app">
    <h2>我是vue文件创建的{{message}}</h2>
    <p>{{ message }}</p>
</template>

<script>
export default {
  template: "#my-app",
  date() {
    return {
      message: "Hello Vue3"
    }
  }
}
</script>


<style>
p {
  color: red;
}
</style>