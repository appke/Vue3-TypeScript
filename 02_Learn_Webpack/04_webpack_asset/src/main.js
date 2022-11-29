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