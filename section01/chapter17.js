// 1. 배열 생성
const arrA = new Array(); // 배열 생성자
const arrB = [1, 2, 3, "test", () => console.log("say Hi~")]; // 배열 리터럴

const arrC = [10, 20, "string", true, false, () => console.log(1 * 2), {}, []];

// 2. 배열 요소 접근
//  인덱스로 접근
//  인덱스는 0부터 시작
const item1 = arrC[0];
const item2 = arrC[1];
arrC[0] = "changed";

console.log(arrC);
arrC[5]();
