/*
    Date 객체 함수: Date.prototype.*
*/

// 현재 시간
var now = new Date();
console.log(now);

// 2025년 1월 20일
var d1 = new Date(2025, 0, 20);
console.log(d1);

// 2025년 1월 20일 13:06:40
var d2 = new Date(2025, 0, 20, 13, 6, 40);
console.log(d2);

// 객체 메서드
console.log(
  "년도: " + d2.getFullYear() + "\n" +
    "월: " + (d2.getMonth()+1) + "\n" +
    "일: " + d2.getDate() + "\n" +
    "시: " + d2.getHours() + "\n" +
    "분: " + d2.getMinutes() + "\n" +
    "초: " + d2.getSeconds() + "\n" +
    "밀리초: " + d2.getMilliseconds()
);
