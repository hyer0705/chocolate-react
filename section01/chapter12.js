// 함수는 값처럼 변수에 담아 사용할 수 있다
function funcA() {
  console.log("함수 선언문으로 만든 함수");
}

const varA = funcA;
varA();

// 1. 함수 표현식 (Function Expression)
//    - 변수에 함수를 할당하는 방식으로, 호이스팅되지 않아 선언 이전에 호출 불가
//    - 함수를 값처럼 다룰 수 있어 다른 변수에 재할당하거나 인수로 전달 가능

// varFn(); // Uncaught ReferenceError: Cannot access 'varFn' before initialization

const varFn = function () {
  console.log("함수 표현식으로 만든 함수");
};

varFn();

// 2. 화살표 함수 (Arrow Function)
//    - ES6에서 도입된 간결한 함수 표현식으로, => 기호를 사용
//    - this 바인딩이 없어 상위 스코프의 this를 그대로 사용 (React에서 특히 유용)
const arrowFn = (value) => {
  console.log(value);

  return value + 1;
};

console.log(arrowFn(10));
