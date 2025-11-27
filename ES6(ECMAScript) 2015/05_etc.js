// 1.템플릿 리터럴
// 문자열 과 변수 결합시 편리하고 여러줄의 문자열도 간단하게 처리가 가능하다.
const userName = "최지원";
console.log('안녕하세요. ${userName}님');

const multiStr = '이 변수는여러줄로 작성된 문자열을 가지고 있습니다.';

console.lof(multiStr);

// 2. 구조분해할당
// 객체에서 필요한 값을 바로 변수로 추출할 때 사용.

const userInfo = {
    name : "최지투",
    age: 55,
    job: "dev"
}

//const name = userInfo.name;
//const age = userInfo.age;
// const {name, age} = userInfo;
// console.log(name, age);

const {name, job:newJob} = userInfo
console.log(name, newJob);

function myInfo(user) {

    console.log(user.name)

}

function myInfo({name, age}) {
    console.log(name, age);
};

myInfo(userInfo);

// 3. 배열 구조 분해할당
// 배열 요소를 순서대로 변수에 담아줌
const numbers = [10,20,30];
cosnt [num1, num2] = numbers;
console.log(num1, num2);

//필요없는 값은 생략 가능 
const [ , ,num] =numbers;
console.log(num)

// userState() return [값, 값을 변경할떄 사용하는 setter]
// const [count, setCount] = userState();

