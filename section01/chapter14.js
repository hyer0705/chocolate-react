// 스코프 (Scope)
//    - 변수나 함수에 접근할 수 있는 유효한 범위

// 1. 전역 스코프 (Global Scope)
//    - 코드 어디서든 접근 가능한 최상위 범위

// 2. 지역 스코프 (Local Scope)
//    - 특정 영역(함수, 블록) 내부에서만 접근 가능한 범위
//    - 변수(const, let): 함수, 조건문, 반복문 등 모든 블록에서 지역 스코프 생성 (블록 레벨 스코프)
//    - 함수 선언문: 함수 내부에서만 지역 스코프를 가짐 (조건문/반복문에서는 호이스팅되어 밖에서도 접근 가능) (함수 레벨 스코프)

const a = 10;
console.log(a);

function fnScope() {
  const b = 11; // 지역 스코프
  console.log(a);
}

// console.log(b); Uncaught ReferenceError: b is not defined

if (true) {
  const c = 12;
  function innerFn() {
    console.log("inner function in if state");
  }
}

innerFn(); // 지역 스코프를 갖지 않음

// console.log(c); Uncaught ReferenceError: c is not defined

for (let i = 0; i < 5; i++) {
  const d = 13;
  function innerFnInFor() {
    console.log("huh?");
  }
}

innerFnInFor(); // 지역 스코프를 갖지 않음
// console.log(d); Uncaught ReferenceError: d is not defined
