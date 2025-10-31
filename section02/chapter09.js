// 배열 변형 메서드

// filter
//  -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
const arr = [
  { name: "김철수", hobby: "테니스" },
  { name: "김영희", hobby: "테니스" },
  { name: "이방원", hobby: "산책" },
];

const tennisPeople = arr.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// map
//  -> 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
const arr2 = [11, 22, 33];
const doubleArr2 = arr.map((item) => item * 2);

// sort
//  -> 배열을 사전순으로 정렬하는 메서드
const arr3 = ["a", "c", "b"];
arr3.sort();

const arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; // a가 앞에 나와야 함
  } else if (a < b) {
    return -1; // b가 앞에 나와야 함
  } else {
    return 0; // 제자리로 둔다
  }
});
console.log(arr4);

// toSorted
//  -> 정렬된 새로운 배열을 반환하는 메서드
const arr5 = [56, 34, 12];
const newArr5 = arr5.toSorted((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr5, newArr5);

// join
//  -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
const strArr = ["nice", "to", "meet", "you"];
const joined = strArr.join();
console.log(joined);
