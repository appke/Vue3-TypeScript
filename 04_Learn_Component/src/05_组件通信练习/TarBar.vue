<template>
  <div class="tab-bar">
    <div class="tab-bar-item"
        :class="{active: currentIndex==index}"
        v-for="(title, index) in titles" 
        :key="title">
      <span @click="itemClick(index)">{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    emits: ["titleClick"],
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
        // ["新闻", "体育", "军事"]
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit("titleClick", index);
      }
    }
    
  }
</script>

<style scoped>
.tab-bar {
  display: flex;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
}

.tab-bar-item.active {
  color: red;
}

.tab-bar-item.active span{
  border-bottom: 5px solid red;
  padding: 5px 10px;
}

</style>