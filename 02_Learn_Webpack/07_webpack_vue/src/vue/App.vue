<template>
  <h2>我是vue文件创建的{{ message }}</h2>
  <p>{{ title }}</p>
</template>

<script>
export default {
  data() {
    return {
      title: "哈哈哈哈哈",
      message: "Hello Vue3"
    }
  }
}
</script>

<style scoped>
p {
  color: red;
}
</style>