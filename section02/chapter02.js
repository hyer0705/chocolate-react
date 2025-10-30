// 단락평가
//  &&, || 연산자를 사용한 평가
function returnFalse() {
  console.log("returnFalse() 실행");
  return undefined;
}

function returnTrue() {
  console.log("returnTrue() 실행");
  return true;
}

console.log(returnFalse() && returnTrue());

// 단락평가 활용 예시
//  T && T => 앞에 T까지만 평가
//  T || T => 뒤에 T까지 평가
function displayName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

const person = { name: "Lu" };
displayName(person);
displayName();
