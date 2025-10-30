# Day 3

## Quiz 1. 모든 약수찾기

다음 요구사항을 만족하는 코드를 작성하세요.

- 변수 num의 모든 약수를 다 찾아서 출력하세요.

```javascript
let num = 100;

const result = new Set();

for (let i = 1; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    result.add(i);
    result.add(num / i);
  }
}

console.log(Array.from(result).sort((a, b) => a - b));
```

## Quiz 2. 소수 판별기 (에라토스테네스의 체)

다음 요구사항을 만족하는 isPrimeNumber 함수를 완성하세요.

- 함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다.
- num이 소수라면 true를, 아니라면 false를 반환합니다.
- 예외적으로 1은 소수로 판별합니다.

```javascript
function isPrimeNumber(num) {
  if (num === 1) return true;

  const isPrimeNums = new Array(num + 1).fill(true);

  for (let i = 2; i * i <= num; i++) {
    if (isPrimeNums[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrimeNums[j] = false;
      }
    }
  }

  return isPrimeNums[num];
}

console.log(isPrimeNumber(1)); // true
console.log(isPrimeNumber(4)); // false
console.log(isPrimeNumber(11)); // true
console.log(isPrimeNumber(12)); // false
```

## Quiz 3

콜백함수를 이용하여 다음 요구사항을 만족하는 코드를 작성하세요

1. 두 수를 덧셈하는 함수 add, 뺄셈하는 sub를 각각 구현하세요.

- 2개의 매개변수 num1, num2를 제공받습니다.
- 연산의 결과를 반환합니다.

2. 다음 조건을 만족하는 함수 calc를 구현하세요

- 3개의 매개변수 num1, num2, callback을 제공받습니다.
  - num1, num2: 연산에 활용될 숫자
  - callback: 실제로 연산을 수행할 함수
- callback 함수로 전달된 연산의 결과값을 콘솔에 출력하세요

```javascript
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  console.log(operation(num1, num2));
}

calculate(5, 3, add); // 8
calculate(5, 3, subtract); // 2
```

## Appendix

[[Day 3] 리액트 미션 안내 Day 3](https://cafe.naver.com/f-e/cafes/31322207/articles/4195?boardtype=L&menuid=92&referrerAllArticles=false&page=2)
