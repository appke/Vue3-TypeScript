<template>
  <div>
    <my-slot-cpn>
      <button>我是按钮</button>
    </my-slot-cpn>
    <my-slot-cpn>
      <input type="text" value="我是输入框">
    </my-slot-cpn>
    <my-slot-cpn>
      <my-button></my-button>
    </my-slot-cpn>

  </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn.vue";
import MyButton from "./myButton.vue";

  export default {
    components: {
      MySlotCpn,
      MyButton,
    }
  }
</script>

<style scoped>

</style>