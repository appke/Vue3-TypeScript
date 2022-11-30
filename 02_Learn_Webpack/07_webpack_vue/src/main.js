// CommonJS模块化导入 
const {add, mul} = require('./js/math');
console.log(add(20, 30));
console.log(mul(20, 30));

// ES6模块化导入
import {name, age} from './js/info';
console.log('name --- ', name);
console.log('age  --- ', age);

// 导入js文件
import "./js/element"

// ES6语法
const message = "Hello World";
const names = ["abc", "nba", "cba"];
names.forEach(item => console.log(item));
console.log(message);

// 引入vue源码
// import { createApp } from 'vue';
// import { createApp } from 'vue/dist/vue.esm-bundler';
// createApp({
//   template: `<h2>我是Vue渲染出来的。{{title}}</h2>`,
//   data() {
//     return {
//       title: "哈哈哈"
//     }
//   }
// }).mount("#app")

// 引入vue文件
import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./vue/App.vue"
createApp(App).mount("#app")