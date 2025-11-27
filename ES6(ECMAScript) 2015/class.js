//js class

// 1. 클래스 선언
// - 객체를 생성하기 위한 설게또
// - 데이터(변수)와 기능(함수), 생성자를 포함하고 있다.

class Person {

    // js에서 생성자는 명확하게 이름을 constructor 라고 정해둠.
    constructor() {
        
    }

}

getAge() {
    return this.
}



//클래스 상속
class Student extends Person {
    constructior(name, age, grade) {
        super(name, age);
        this.grade = grade;

    }
    introduce() {
        console.log('제 이름은 ${this.name}이며 학년은 ${this.grade}입니다');
    }
}


const st1 = new Student("최지루", 20, 1);
st1.printInfo();
st1.introduce();

