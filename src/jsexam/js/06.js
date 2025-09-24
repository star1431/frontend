/** forEach() 메서드 -----------------------  */
/**
 * 1. forEach((item, index, array) => {})
 * item : 배열의 각 요소
 * index : 요소의 인덱스
 * array : 배열 자체
*/ 

let arr0 = [1, 2, 3, 4, 5, 6, 7];
arr0.forEach((item, index, array) => {
    console.log(`item: ${item}, index: ${index}, array: ${array}`);
    // item: 1, index: 0, array: 1,2,3,4,5,6,7
    // ...
    // item: 7, index: 6, array: 1,2,3,4,5,6,7
});

let squ0 = [];
const square = (x) => x * x;
/**
 * 2. forEach()는 리턴값 X
 * - 콜백 함수 내부에서 별도의 배열에 푸시(push)해야 함
 */
arr0.forEach((item) => {
    squ0.push(square(item));
})
console.log(squ0); // [1, 4, 9, 16, 25, 36, 49]

squ0 = [];
const square2 = (x) => squ0.push(x * x);
/**
 * 3. forEach() 콜백 함수는 별도의 함수로도 정의 가능
 * - 인자를 내부에서 바로 사용
 */
arr0.forEach(square2);
console.log(squ0); // [1, 4, 9, 16, 25, 36, 49]


console.log('-'.repeat(20)); 
/** map() 메서드 ----------------------- */
/**
 * 1. map((item, index, array) => {})
 * item : 배열의 각 요소
 * index : 요소의 인덱스
 * array : 배열 자체
 * 리턴값: 콜백 함수의 리턴값으로 구성된 새로운 배열
    - 기존 배열은 변경되지 않음
 */

// 각 요소를 제곱하여 새로운 배열 생성
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let squ1 = arr1.map((item) => item * item);
console.log(squ1); // [1, 4, 9, 16, 25, 36, 49]


console.log('-'.repeat(20)); 
/** filter() 메서드 ----------------------- */
/**
 * 1. filter((item, index, array) => {})
 * item : 배열의 각 요소
 * index : 요소의 인덱스
 * array : 배열 자체
 * 리턴값: 콜백 함수의 결과가 true인 요소로 구성된 새로운 배열
    - 기존 배열은 변경되지 않음
 */

// 짝수인 요소만 새로운 배열 생성
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let even2 = arr2.filter((item) => item % 2 === 0);
console.log(even2); // [2, 4, 6]


console.log('-'.repeat(20)); 
/** reduce() 메서드 ----------------------- */
/**
 * 1. reduce((accumulator, item, index, array) => {}, initialValue)
 * accumulator : 누적값 (이전 콜백 함수의 리턴값)
 * item : 배열의 각 요소
 * index : 요소의 인덱스
 * array : 배열 자체
 * initialValue : 첫 번째 호출 시 accumulator의 초기값
 * 리턴값: 최종적으로 누적된 값
 */

// 배열의 모든 요소를 더하여 하나의 값으로 축소
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let sum4 = arr4.reduce((acc, item) => {
    return acc + item;
}, 0);
// acc=0 → (0+1)=1 → (1+2)=3 → (3+3)=6 → ... → (21+7)=28
console.log(sum4); // 28


const items = [
    { id: 1, name: '아이템1' },
    { id: 2, name: '아이템2' },
    { id: 3, name: '아이템3' }
];
let itemVal = items.find(item => item.id === 2);
console.log(itemVal); // { id: 2, name: '아이템2' }

let indexOf = items.indexOf(itemVal); // indexOf는 find로 찾은 객체 참조 그대로 반환하여 인덱스 찾음
console.log(indexOf); // 1

let itemIndex = items.findIndex(item => item.id === itemVal.id);
console.log(itemIndex); // 1