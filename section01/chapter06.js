// 형 변환
// 1. 묵시적 형 변환
//  -> JS 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = "20";

console.log(num + str); // 1020

// 2. 명시적 형 변환
//  -> 프로그래머가 내장함수 등을 이용해서 직접 형 명시하여 형 변환 하는 것
let num1 = 123;
let num1ToStr = String(num1); // "123"

let str1 = "705";
let str1ToNum = Number(str1); // 705

let str2 = "28살";
let str2ToNum = parseInt(str2); // 28

console.log(str2ToNum);
