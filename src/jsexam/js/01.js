console.log("index.js loaded");
// window.addEventListener('load', () => {});

console.log('-'.repeat(20)); 

/** 변수선언 ------------------------ */
/**
 * let      - es6+ (재할당 가능)
 * const    - es6+ (재할당 불가)
 * var      - es5- (재할당 가능, 호이스팅 문제로 잘 안씀)
 * -----------------------
 * 호이스팅(hoisting) : 변수선언이 코드의 선두로 끌어올려지는 현상
 */
var _a = 1;
var _a = "안녕";    // 호이스팅

let _b = 1;
//let _b = 2;       // error
_b = "반가워";      // 재할당 가능

const _c = 1;
// const _c = 2;    // error
// _c = 2;          // error


let _num1 = 10, _num2 = 20;

/** 문자열  ----------------------- */

// 객체 리터럴
let _a1 = 10, _b1 = 20;
let _sumMsg = `${_a1} + ${_b1} = ${_a1 + _b1}`;


let str = ' Hello JS ';
console.log(str.trim());                // 'Hello JS'
console.log(str.toUpperCase());         // ' HELLO JS '
console.log(str.toLowerCase());         // ' hello js '
console.log(str.includes('JS'));        // true
console.log(str.indexOf('o'));          // 5
console.log(str.replace('JS', '2'));    // ' Hello 2 '
console.log(str.split(' '));            // ['', 'Hello', 'JS', '']
console.log(typeof str);

console.log('-'.repeat(20)); 

/** 불리언  ----------------------- */
let _check;
_check = true;
_check = false;
console.log(typeof _check);

function findUser2(id) { };
console.log(findUser2(1)); // null

console.log('-'.repeat(20)); 