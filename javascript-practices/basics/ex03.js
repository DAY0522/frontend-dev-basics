console.log("============[02] undefined");
var myVar1; // 암시적으로 undefined가 대입.
var myVar2 = undefined; // 명시적으로 undefined가 대입.
var myVar3 = null;

console.log(myVar1, myVar2, myVar3);

console.log("============[03] var");
// x;  // Reference Error
y = 10;
var x;

console.log("============[05] undefined와 null의 동치(equal) 비교");
console.log(myVar1 == myVar2); // 값 비교
console.log(myVar1 === myVar3); // 타입비교 + (값비교, 동일성)

console.log("============[06] Equal Operators(==, ===) 와 형변환");

// == : equality, 값의
console.log("4" == 4);
console.log(false == 0);
console.log("abc" == new String("abc"));

// ===
// 1. 타입의 동일성
// 2. 타입이 동일한 경우
//  2-1. primitive type: 값의 동일성 
//  2-2. 객체(object, function): 객체의 동일성

console.log("4" === 4);
console.log(false === 0);
console.log("abc" === new String("abc"));
console.log(new Number(10) === new Number(10));