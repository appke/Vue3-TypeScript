<template>
<h2>{{ title }}</h2>
<p>我是App.vue的内容</p>
</template>


<script>
export default {
  data() {
    return {
      title: "Hello Vue3"
    }
  }
}
</script>

<style scoped>
h2 {
  color: blue;
  font-size: 30px;
}
</style>