/** 배열 -----------------------  */

// 생성
const strs = ['안','녕','js'];
const nums = [1,2,3,4,5];

// 접근
console.log(strs[2]); // js
console.log(nums[1]); // 2

// 수정
strs[0] = 'H';
console.log(strs[0]); // H

// 길이
console.log(strs.length); // 3

console.log('-'.repeat(20)); 


/** 배열 메서드  -----------------------  */

const arr0 = [1,2,3];

arr0.push(4);       // 끝에 추가    : 1,2,3,4
arr0.pop();         // 끝에서 제거  : 1,2,3
arr0.unshift(0);    // 앞에 추가    : 0,1,2,3
arr0.shift();       // 앞에서 제거  : 1,2,3

// 합치기
const arr1 = [4,5];
const arr2 = arr0.concat(arr1); // 1,2,3,4,5

// 범위추출, 범위삭제
console.log(arr2.slice(0,2)); // 0~2 만뽑음 : 1,2
arr2.splice(0,1); // 0~1 삭제 : 2,3,4,5
console.log(arr2);

// 순서변경
arr2.reverse(); // 뒤집기   : 5,4,3,2
arr2.sort();    // 오름차순 : 2,3,4,5
arr2.sort((a,b) => b - a); // 내림차순 : 5,4,3,2

// 탐색
console.log(arr2.indexOf(3));  // idx찾기 : 2 (없으면 -1) 
console.log(arr2.includes(2)); // 포함여부 : true
console.log(arr2.find(n => n > 3));      // 조건true 첫요소값 : 5 (없으면 undefined)
console.log(arr2.filter(n => n > 3));    // 조건true 전체요소 : [5,4] (없으면 [])
console.log(arr2.findIndex(n => n > 3)); // 조건true 첫요소 idx : 0 (없으면 -1)


// 문자열로 확인
console.log(arr2.toString());   // 5,4,3,2
console.log(arr2.join('-'));    // 5-4-3-2


console.log('-'.repeat(20)); 


/** 스프레드, 복사, 배열 분해  -----------------------  */


// 스프레드 연산자 (...)
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const combined = [...arrA, ...arrB];  // [1, 2, 3, 4, 5, 6]

// 복사
const copyArr0 = arrA;      // 주소복사 (얕은복사)
const copyArr1 = [...arrA]; // 1차원 깊은복사 (다차원은 x)

copyArr0[0] = 100;
copyArr1[1] = 200;
console.log(arrA, copyArr0, copyArr1); 


// 다차원 깊은 복사
const deepArr = [[1,2], [3,4]];
const copyDeepArr = deepArr.map(inner => [...inner]);
copyDeepArr[0][0] = 100;
console.log(deepArr, copyDeepArr);


// 배열 구조분해 할당
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// 값 교환
let x = 10, y = 20;
[x, y] = [y, x];
console.log(x, y);  // 20, 10