// 배열 요소 조작 메서드

// push
//  -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
const arr = [1, 2, 3];
const newLength = arr.push(4, 5, 6, 7);

// pop
//  -> 배열의 맨 뒤에 있는 요소를 제거하고, 반환
const poppedItem = arr.pop();

// shift
//  -> 배열의 맨 앞에 있는 요소를 제거, 반환
const shiftedItem = arr.shift();

// unshift
//  -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
const newLength2 = arr.unshift(11, 22, 33);

// slice
//  -> 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
const arr2 = [11, 22, 33, 44, 55];
const sliced = arr2.slice(3, 5);
const sliced2 = arr2.slice(3);
const sliced3 = arr2.slice(-2);

// concat
//  -> 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
const arr3 = [123, 456];
const arr4 = [789, 1011];
const concatedArr = arr3.concat(arr4);
console.log(concatedArr);
