import { createApp } from 'vue'
// import App from "./01_组件拆分与嵌套/App";
// import App from "./02_组件css作用域/App";
// import App from "./03_父组件传子/App"
// import App from "./04_子组件传父/App"
// import App from "./05_组件通信练习/App"
// import App from "./06_Provide和Inject/App"
// import App from "./07_事件总线的使用/App";
// import App from "./08_插槽基本使用/App";
// import App from "./09_具名插槽的使用/App";
// import App from "./10_作用域插槽/App";
// import App from "./11_动态组件的使用/App"
// import App from "./12_异步组件的使用/App";
// import {sum} from "./12_异步组件的使用/utils/math";
// console.log('sum(10, 20) :>> ', sum(10, 20));

// import("./12_异步组件的使用/utils/math").then((res) => {
//   console.log('sum(10, 20) :>> ', sum(10, 20));
// })

// import App from "./13_引用元素和组件/App"
import App from "./14_生命周期函数/App"

createApp(App).mount('#app')
