// 1. Spread 연산자
// -> spread: 흩뿌리다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
const arr1 = [1, 2, 3];
const arr2 = [4, ...arr1, 5, 10];

console.log(arr2);

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  cc: 10,
  ...obj1,
  dd: 22,
};

console.log(obj2);

const func = (one, two, three) => {
  console.log(one, two, three);
};
func(...arr1);

// 2. Rest 연산자
// -> Rest: 나머지
// -> 나머지 매개변수

const sum = (...rest) => {
  let result = 0;
  for (let i = 0; i < rest.length; i++) {
    result += rest[i];
  }

  return result;
};

console.log(sum(1, 2, 3, 4, 5));
