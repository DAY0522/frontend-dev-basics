console.log("============[01] 일반 함수");
var myFunction = function () {
  console.log("일반함수");
};

myFunction();

console.log("============[02] 생성자 함수");
var MyObject = function (age, name) {
  console.log("MyObject constructor called");
  this.age = age;
  this.name = name;
};

var o1 = new MyObject(10, "둘리");
console.log("o1: " + typeof o1 + ":" + (o1 instanceof MyObject));
console.log(o1);

var o2 = new MyObject(20, "마이콜");
console.log("o2: " + typeof o2 + ":" + (o2 instanceof MyObject));
console.log(o2);
