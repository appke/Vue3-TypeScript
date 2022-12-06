<template>
  <div>
    <tab-bar :titles=titles @titleClick="itemClick"></tab-bar>
    <h2 style="padding-top: 30px;">{{  contents[currentIndex]  }}</h2>
  </div>
</template>

<script>
import TabBar from "./TarBar.vue";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"],
      contents: ["衣服的页面", "鞋子的页面", "裤子的页面"],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>

</style>