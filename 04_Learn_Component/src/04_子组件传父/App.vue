<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <CounterOperation @addOne="add" @subOne="sub" @addN="addNum"></CounterOperation>
  </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue';
export default {
  components: {
    CounterOperation,
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      this.counter++;
    },
    sub() {
      this.counter--;
    },
    addNum(num) {
      this.counter += num;
    }
  }
}
</script>

<style scoped>

</style>