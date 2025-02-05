/*
    전역 객체(global object)

    node: global
    browser: window
*/

global.n = "둘리";
console.log(global.n, n);

var e = "dooly@gmail.com";
console.log(global.e, e);

var f = function () {
  console.log(this);
};

console.log(global.f);
console.log(global.parseInt);
