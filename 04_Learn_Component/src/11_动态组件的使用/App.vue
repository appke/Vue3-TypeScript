<template>
  <div>
    <button v-for="item in tabs" :key="item" 
            @click="btnClick(item)" 
            :class="{active: currentTab==item}">
      {{ item }}
    </button>

    <!-- <template v-if="currentTab == 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab == 'home'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->

    <!-- 动态组件 -->
    <component :is="currentTab"
              name="muk"
              :age="18"
              @pageClick="pageClick">
    </component>

  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
import Category from "./Category.vue";
export default {
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    }

  },
  methods: {
    btnClick(item) {
      this.currentTab = item;
    },
    pageClick() {
      console.log("page内部发生点击 ---");
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}

</style>