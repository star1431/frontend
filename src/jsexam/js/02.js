/** 산술연산  ----------------------- */

let _a = 10 + 5;   // 15
let _b = 10 - 5;   // 5
let _c = 10 * 5;   // 50
let _d = 10 / 5;   // 2
let _e = 10 % 3;   // 1 (나머지)

/** 비교연산  ----------------------- */

// == 동등한지 비교함 - 비권장
console.log(5 == '5');    // true
// === 정확히 비교함
console.log(5 === 5);     // true
console.log(5 === '5');   // false
console.log(5 !== '5');   // true
// 크기 비교
console.log(10 > 5);      // true
console.log(10 >= 10);    // true

console.log('-'.repeat(20)); 


/** 논리연산  ----------------------- */

// and (&&)
console.log(true && true);    // true
console.log(true && false);   // false
// or (||)
console.log(true || false);   // true
console.log(false || false);  // false
// not (!)
console.log(!true);           // false
console.log(!false);          // true

console.log('-'.repeat(20)); 

/** 삼항연산  ----------------------- */

const _age0 = 20;
console.log(_age0 >= 18 ? '성인' : '미성년');

// 중첩방식
const _hour = 23;

const _test = 
    5 < _hour && _hour < 12 ? '아침'
    : _hour < 18 ? '오후'
    : _hour < 24 ? '저녁'
    : '새벽';

console.log(_test); // 저녁

console.log('-'.repeat(20)); 


/** 조건문  ----------------------- */

const _age = 20;
let _msg;
// if 문
if(_age >= 18) _msg = '성인';
else if (_age >= 13) _msg ='청소년';
else _msg = '유아';

// switch 문
switch (_msg) {
    case '성인' : 
        _msg += ', 구매 가능'
        break;
    case '청소년' :
    case '유아' :
        _msg += ', 구매 불가'
        break;
    default :
        break;
}
console.log(_msg) // 성인, 구매 가능

console.log('-'.repeat(20)); 