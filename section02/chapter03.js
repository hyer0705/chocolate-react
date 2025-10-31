// 1. 배열 구조 분해 할당
const arr = [1, 2, 3];
const [one, two, three, four = 4] = arr;

// 2. 객체 구조 분해 할당
const person = {
  name: "Lu",
  age: 29,
  hobby: "read books",
  location: "Korea",
};

const { name: displayName, age, hobby, location } = person;

// 3. 객체 구조 분해 할당을 이용한 함수 매개변수 처리

const func = ({ name, age, hobby, location }) => {
  console.log(name, age, hobby, location);
};

func(person);
