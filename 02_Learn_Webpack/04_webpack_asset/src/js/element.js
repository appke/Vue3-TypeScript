import "../css/style.css";
import "../css/title.less";
import "../css/image.css";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊,李银河";

// 设置背景图片
const bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";

// 把图片当成模块引入
import pngImage from "../img/zznh.png";
const imgDivEl = document.createElement("img");
// imgDivEl.src = "../img/zznh.png"; //仅仅赋值路径字符串
imgDivEl.src = pngImage;

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgDivEl);