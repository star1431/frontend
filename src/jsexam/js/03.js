/** 함수 방식  ----------------------- */

console.log(add(1,2)); // 선언식은 호이스팅됨
// 함수 선언식
function add(a, b) { return a + b };

// 함수 표현식
const divide = function (a, b) { return a / b };

// 화살표 함수 (ES6+)
const multiplyA = (a, b) => a * b; // or
const multiplyB = (a, b) => { return a * b };
