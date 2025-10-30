// ============================================
// JavaScript 함수 개념 정리
// ============================================

// 1. 함수 선언문 (Function Declaration)
//    - 함수를 정의하는 기본적인 방법
//    - 호이스팅이 적용되어 선언 전에 호출 가능

// 2. 함수의 주요 구성 요소
//    • 인수 (Argument): 함수를 호출할 때 전달하는 실제 값
//    • 파라미터 (Parameter): 함수 정의에서 인수를 받는 변수
//    • 반환값 (Return Value): return 문을 통해 함수가 반환하는 값

// 3. 호이스팅 (Hoisting)
//    - "끌어올리다"라는 의미
//    - 함수 선언문이 코드 실행 전에 메모리에 먼저 등록됨
//    - 결과: 함수 선언 위치보다 앞에서도 호출 가능

function getTriangleArea(base, height) {
  // 중첩 함수 (Nested Function)
  // - 함수 내부에 선언된 함수로, 외부 함수의 변수에 접근 가능 (클로저)
  function innerFn() {
    console.log("innerFn");
  }

  return base * height * 0.5;
}

const triangle1 = getTriangleArea(10, 5);
console.log(triangle1);

const triangle2 = getTriangleArea(3, 4);
console.log(triangle2);
