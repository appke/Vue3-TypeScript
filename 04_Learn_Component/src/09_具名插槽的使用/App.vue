<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <button>左边按钮</button>
      </template>
      <template v-slot:center>
        <h4>中间标题</h4>
      </template>
      <template v-slot:right>
        <i>右边i元素</i>
      </template>

    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar,
  }
}
</script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
}
</style>