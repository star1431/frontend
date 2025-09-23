
var sample = sample || {};

// 예시1 - 자바스크립트는 자바와 다르게 데이터타입 선언 없어서 아무거나 대입가능
sample.Sample01 = () => {
    let number = 10;

    const init = () => {
        consoleCheck();
    }

    const test = () => {
        return '안녕?';
    }

    const consoleCheck = () => {
        console.log("number 변수:", number);

        number = '문자로 변경'

        console.log("number 변수확인2:", number);

        number = ['안녕', 1, '5 + 3:' + (5 + 3)];

        console.log("number 변수확인3:", number);

        number = {
            'dt1' : '안녕',
            'dt2' : 123,
            'dt3' : test(),
            'dt4' : [
                {
                    'key1' : 'value1', 
                    'key2' : 'value2'
                },
                {
                    'ㅇㅇ' : '11', 
                    'ㄴㄴ' : '22'
                }
            ],
            'dt5' : function() {
                return '안ㄴㄴㄴ'
            }
        };

        console.log("number 변수확인4:", number);


        console.log("number 객체 접근:", number.dt4[0]['key']);
    }

    init();
}

// 예시2 - 자바스크립트는 메서드를 파라매터로 받을 수 있음

sample.Sample02 = () => {

    const init = () => {
        consoleCheck();
    }


    const add = (a, b) => {
        return a + b;
    }
    // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    const divide = (a, b) => {
        return a / b;
    }

    // 아무런 제약없이 메서드 받아서 쓸 수 있음
    const parmsFunc = (func, a, b) => {
        return func(a, b);
    }


    const consoleCheck = () => {
        console.log("add(3, 5): ", add(3, 5));
        console.log("add(3, 5, 1): ", add(3, 5));
        console.log("add(10, 3): ", divide('10', 3));
        console.log("parmsFunc(add, 10, 20): ", parmsFunc(add, 10, 20));
        console.log("parmsFunc(divide, 21, 3): ", parmsFunc(divide, 21, 3));



        console.log("test('10'): " , test22(add));
    }
    
    
    const test22 = (b) => {
        if(b) return 'true';
        else return 'false';
    }

    init();
}




window['sample'] = sample;



