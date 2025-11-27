// 함수표현식

// 1. 함수 


function hello() {

    console.log("hellow!");
}

hello();

//js에서는 함수도 하나의 값(변수)으로 취급한다.
let __hello = hello;
console.log(_hello);

_hello();


//2. 익명함수 
const printMsg = function() {

    console.log("this is a function");
}

printMsg();




// 기본함수는 호이스팅이 된다.
tmp();
function tmp() {
    console.log("나는 함수다.");
}






let tmp2 = function() {

    console.log("나도 함수다.");
}




// 함수의 기본 매개변수
function greet(name = "방문자", msg="안녕") {
    console.log('${name}님 ${msg}}');

}

//js의 함수는 호출시 이름으로만 함수를 판단함.
greet("최지원", "안녕하세요");
greet("김수민");

greet(null);
greet(undefined, "누구십니까?");


function greet2(name = "방문자" , msg) {
    console.log('${name}님 ${msg}');
}

greet2(defined, "안녕하세요.");

function greet3(msg, name = "방문자") {
    console.log('${name}님 ${msg}');
}

greet3("안녕하세요.");


// 2. 활살표 함수
function add(a,b) {
    return a + b;
}

const add2 = (a,b) => {
    console.log(a, b);
    return a + b}




// 함수의 구현부에 리턴값만 있다면 return키워드와 {}를 생략가능
const add3 = (a, b) => a+b;
// 매개변수가 한개라면 ()도 생략 가능
const print = msg => console.log(msg);

// this의 바인딩차이
// 화살표함수는 자신만의 this를 바인딩하지 않는다.

const human = {
    name : "지원",
    agr : 55
    info : function() {
        setTimedout(function() {
            consolelog('안녕 나는 ${this.name}이야');
        })
    }
}

human.info();



huamn2.infi();
//3. 콜백함수
// 특정 함수를 실행헐 떼 실행하는 살마이 특정 기능을 완료한 후에 실행하고싶은 코드를 정의하시오


run(()=> {
    console.log("run이 실행됨");
})


run(()=> {
    console.log("run이 실행됨.22222");
})

run(()=> {
    console.log("run이 실행됨.33333");
})





