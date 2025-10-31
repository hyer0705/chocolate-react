// 배열 순회와 탐색 메서드

// forEach
//  -> 모든 요소를 순회하면서,각각의 요소에 특정 동작을 수행시키는 메서드
const arr = [11, 22, 33];
arr.forEach((item, idx, arr) => console.log(`${idx}: ${item * 2}`));

const doubleArr = [];
arr.forEach((item) => doubleArr.push(item * 2));

// includes
//  -> 배열에 특정 요소가 있는지 확인하는 메서드
const arr2 = [12, 34, 56];
const isInclude = arr2.includes(34);

// indexOf
//  -> 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
const arr3 = ["1", "2", "3"];
const index = arr3.indexOf("2");
console.log(index);

// findIndex
//  -> 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
const arr4 = [{ name: "Lu" }, { name: "Sue" }];
const findedIndex = arr4.findIndex((item) => item.name === "Lu");
console.log(findedIndex);

// find
//  -> 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
const arr5 = [222, 333, 444];
const finded = arr5.find((item, idx) => item > 222);
console.log(finded);
