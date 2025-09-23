


/** 객체 생성과 접근  ----------------------- */

// 객체 생성
const user = {
    name: '김철수',
    age: 20,
    addr: '서울시',
    male: true,
    hobbies: ['여행', '독서', '게임'],
    sayHi: function() {
        console.log(`안녕하세요, ${this.name}입니다.`);
    }
};

// 속성 접근
console.log(user.name); // 김철수
console.log(user['age']); // 20

// 속성 수정
user.hobbies[0] = '영화';

// 속성 추가
user.email = 'test@example.com';

// 속성 삭제
delete user.addr;

// 메서드 호출
user.sayHi(); // 안녕하세요, 김철수입니다.

console.log(user);

console.log('-'.repeat(20)); 


/** 객체 구조 분해  ----------------------- */

const product = {
    id: 101,
    name: '노트북',
    price: 1200000,
    brand: '삼성',
    specs: {
        cpu: 'i9',
        ram: '16GB',
        ssd: '512GB'
    }
};

// 기본 구조 분해
const { id, name, price } = product;
console.log(id);    // 101
console.log(name);  // 노트북
console.log(price.toLocaleString()); // 1,200,000

// 변수명 변경 - 실제 반영x (대입)
const { brand: maker } = product;
console.log(maker); // 삼성

// 내부 중첩 분해
const { specs: { cpu, ram } } = product;
console.log(cpu); // i9
console.log(ram); // 16GB

// 함수로 파라매터 구조분해
function consoleProd({ name, price }) {
    console.log(`${name}의 가격은 ${price.toLocaleString()}원 입니다.`);
}
consoleProd(product);
// 노트북의 가격은 1,200,000원입니다.

console.log(product)
console.log('-'.repeat(20));


/** 객체 getter & setter  ----------------------- */
const user2 = {
    // 필드변수
    _name: "김철수",

    // getter
    get name() {
        return this._name;
    },

    // setter
    set name(newName) {
        this._name = newName;
    }
};

console.log(user2.name); // 김철수 (getter)
user2.name = "홍길동"; // setter

console.log(user2.name); // 홍길동 (getter)

console.log(user2._name);

console.log('-'.repeat(20)); 


/** this 바인딩 ----------------------- */

const _val = "global";
const funcObj = {
    _val: "obj",
    func0() { console.log(this._val) },
    func1: function() { console.log(this._val) },
    func2: () => { console.log(this._val) },
};
funcObj.func0(); // obj
funcObj.func1(); // obj
funcObj.func2(); // global (화살표함수는 this 바인딩이 없음)

console.log('-'.repeat(20)); 
