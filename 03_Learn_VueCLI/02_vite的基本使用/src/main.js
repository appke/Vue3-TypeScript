
import _ from "lodash-es"
import { sum } from "./js/math";

console.log('20 + 30 = ', sum(20, 30));
console.log(_.join(["abc", "gdp", "ccd"], "-"));
console.log("Hello main.js")

// 加载css文件
import "./css/style.css"

// 加载了less文件
import "./css/title.less"
const titleEl = document.createElement("div");
titleEl.className ="title";
titleEl.innerHTML = "Hello World";
document.body.appendChild(titleEl);

// 导入ts文件
import mul from "./ts/mul";
console.log("mul(20* 30) = ", mul(20, 30));

// 导入vue单文件
import { createApp } from 'vue'
import App from './vue/App.vue'
createApp(App).mount("#app")