// Date 객체

// Date 객체 생성
const date = new Date();
const birth = new Date("1996/07/05");

// 타임스탬프
//  -> 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
const ts1 = date.getTime();
const newdate = new Date(ts1);
console.log(newdate);

// 시간 요소들을 추출하는 방법
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const hour = date.getHours();
const minutes = date.getMinutes();
const secondes = date.getSeconds();
console.log(year, month, day, hour, minutes, secondes);

// 시간 수정하기
date.setFullYear(1996);
date.setMonth(6);
date.setDate(5);

date.setHours(15);
date.setMinutes(2);
date.setSeconds(11);
console.log(date);

// 시간을 여러 포맷으로 출력하기
console.log(date.toDateString());
console.log(date.toLocaleString());
