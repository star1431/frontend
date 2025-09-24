/** 생성자 함수 -----------------------  */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(`안녕하세요. 저는 ${this.name}입니다.`);
    };
}

// 인스턴스 생성
const p1 = new Person('홍길동', 30);

// 메서드 호출 및 속성 접근
p1.sayHi();             // 안녕하세요. 저는 홍길동입니다.
console.log(p1.age);    // 30

console.log('-'.repeat(20)); 
/** 프로토타입 -----------------------  */
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
};

// 프로토타입에 메서드 정의
Animal.prototype.speak = function() {
    console.log(`${this.name}, '${this.sound}' 소리칩니다.`);
};

// 프로토타입에 공유 값 추가
Animal.prototype.category = '동물';

// 인스턴스 생성
const dog = new Animal('개', '뽀삐', '멍멍');

// 메서드 호출 및 속성 접근
dog.speak();                // 뽀삐, '멍멍' 소리칩니다.
console.log(dog.type);      // 개
console.log(dog.category);  // 동물


console.log('-'.repeat(20)); 
/** 프로토타입 상속 ----------------------- */
// Parent 생성자 함수 정의
function Parent(name) {
    this.name = name;
};

// Parent의 프로토타입에 메서드 정의
Parent.prototype.greet = function() {
    console.log(`안녕하세요, ${this.name}입니다.`);
};

// Child 생성자 함수 정의
function Child(name, age) {
    Parent.call(this, name); // 부모 생성자 호출
    this.age = age;
};

// Child의 프로토타입을 Parent의 인스턴스로 설정
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.introduce = function() {
    console.log(`저는 ${this.name}, ${this.age}살 입니다.`);
};

const child1 = new Child('철수', 10);
const child2 = new Child('영희', 8);

child1.greet();        // 안녕하세요, 철수입니다.
child2.introduce();    // 저는 영희, 8살 입니다.

console.log('-'.repeat(20)); 
/** 클래스 -----------------------  */
// 클래스 정의
class Product {
    _name; 
    _price;

    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    display() {
        console.log(`상품명: ${this._name}, 가격: ${this._price.toLocaleString()}원`);
    }

    static info() {
        console.log('Product 클래스입니다.');
    }
}

const prod1 = new Product('노트북', 1500000);
const prod2 = new Product('스마트폰', 800000);

prod1.display(); // 상품명: 노트북, 가격: 1,500,000원
prod2.display(); // 상품명: 스마트폰, 가격: 800,000원

// prod1.info(); // error 스태틱 접근 불가 
Product.info(); // Product 클래스입니다.