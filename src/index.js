// toastLog('Hello, Auto.js ' + $app.autojs.versionName);
const test = require('./test/index.js');

function helloWebpack (...name){
  console.log("webpack,你好啊！我是");
  console.log(...name);
}

console.log("hello world!!!");
console.log("test auto compile");
helloWebpack("hunhunzhang", "asljdlajsd", "aldjsjdioiu");
test.print();

let a = null;
console.log(a ?? "a is null");
