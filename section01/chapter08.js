// null 병합 연산자
//  -> 존재하는 값을 추려내는 기능
//  -> null, undefined가 아닌 값을 찾아내는 연산자
let num1;
let num2 = 705;
let num3 = 812;

num1 ?? num2;
num2 ?? num3;

let username = "username";
let displayName = "display name";

const profileName = username ?? displayName;

// typeof 연산자
//  -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
const str = "text";
const num = 123;

typeof str;
typeof num;

// 삼항 연산자
//  -> 항을 3개 사용하는 연산자
//  -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let even = 124;
even % 2 === 0 ? "짝" : "홀";
