/** setTimeout() -----------------------  */
const section1 = function(callback) {
    console.log('시작');
    // 태스크 큐에 콜백 함수 등록
    setTimeout(() => {
        console.log('타이머(1초) 끝');
        callback();
    }, 1000);
    console.log('끝');
    // 출력 순서: 시작 -> 끝 -> 타이머(1초) 끝
};


/** 콜백형식 ----- */
const section2 = function() {
    const funcA = (callback) => {
        console.log('funcA 시작');
        setTimeout(() => {
            console.log('funcA 타이머(2초)');
            callback();
        }, 2000);
    };
    

    // funcA에 콜백 함수 전달
    funcA(() => {
        console.log('funcA 콜백 실행');
        console.log('-'.repeat(20));
    });
    // 출력 순서: funcA 시작 -> funcA 타이머(2초) -> funcA 콜백 실행
};

// section1(section2);

/** Promise -----------------------  */

const promiseExam = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // 성공 여부
            if (success) {
                resolve('작업 성공');
            } else {
                reject('작업 실패');
            }
        }, 1000);
    });
};

// promiseExam()
//     // then() : 작업 성공 시 호출
//     .then((result) => {
//         console.log(result);
//     })
//     // then() 체이닝으로 추가 작업 가능
//     .then(() => console.log('추가 작업1'))
//     .then(() => console.log('추가 작업2'))
//     .then(() => console.log('추가 작업3'))
//     // catch() : 작업 실패 시 호출
//     .catch((error) => {
//         console.error(error);
//     })
//     // finally() : 성공/실패 상관없이 항상 호출
//     .finally(() => {
//         console.log('작업 완료');
//     });
// 출력: 작업 성공 → 작업 완료

console.log('-'.repeat(20));


/** Promise 딜레이유틸 -----------------------  */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 딜레이 사용 예시
// delay(1000)
//     .then(() => {
//         console.log('1초 후 실행');
//         return delay(2000);
//     })
//     .then(() => {
//         console.log('추가 2초 후 실행');
//         return delay(3000);
//     })
//     .then(() => {
//         console.log('추가 3초 후 실행');
//         return delay(4000);
//     })
//     .then(() => {
//         console.log('추가 4초 후 실행');
//     });

    
console.log('-'.repeat(20));


/** async/await -----------------------  */

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function asyncFunc1() {
    await sleep(1000);
    // .. 작업내역
    console.log('end');
}
asyncFunc1().then(() => {
    console.log('asyncFunc1 종료');
});
// 출력: end → asyncFunc1 종료

const asyncFunc2 = async () => {
    try {
        await sleep(1000);
        console.log('1초 후 실행');
        await sleep(2000);
        console.log('추가 2초 후 실행');
    } catch (error) {
        console.error('에러 발생:', error);
    }
};

asyncFunc2().then(() => {
    console.log('asyncFunc2 종료');
});
// 출력: 1초 후 실행 → 추가 2초 후 실행 → asyncFunc2 종료




// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Promise.all 예시
async function promiseAllExam() {
    const result = await Promise.all([
        // 배열 안의 모든 Promise가 resolve(성공) 되어야 await가 풀림
        sleep(1000).then(() => '1초 완료'), 
        sleep(2000).then(() => '2초 완료'), 
        sleep(3000).then(() => '3초 완료')
    ]);
    console.log(result); 
}
promiseAllExam(); // 3초 후 -> ['1초 완료', '2초 완료', '3초 완료'] 

// Promise.race 예시
async function promiseRaceExam() {
    const result = await Promise.race([
        // 여러 Promise 중에서 가장 먼저 끝난 것 하나만 결과로 반환
        sleep(1000).then(() => '1초 완료'), 
        sleep(2000).then(() => '2초 완료'), 
        sleep(3000).then(() => '3초 완료')
    ]);
    console.log(result); 
}
promiseRaceExam(); // 1초후 -> '1초 완료'


var UiJs = UiJs || {};
console.log(UiJs); // {}

let newName = '김씨';
let oldName = '박씨';

newName &&= oldName; // newName이 true니 oldName에 넣음
console.log(newName); // '박씨'