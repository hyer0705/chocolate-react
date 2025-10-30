// 1. 객체 상수
const obj = {
  name: "까망이",
  type: "고양이",
  color: "black",
};

// 상수 객체를 다른 값으로 대입하는 건 오류가 난다
// obj = 123; // Uncaught TypeError: Assignment to constant variable.

obj.age = 3; // 추가
obj.name = "얼룩이"; // 수정
delete obj.color; // 삭제

console.log(obj);

// 2. 메서드
//  -> 값이 함수인 프로퍼티
//  -> 행동을 표현
const idle = {
  name: "IDLE",
  description: "KPOP girl group",
  // 메서드 선언
  sing() {
    console.log("나는 아픈건 딱 질색이니까~");
  },
};

idle.sing();
idle["sing"]();
