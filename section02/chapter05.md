# 2.5) 원시 타입 vs 객체 타입

## 자료형

### Primitive Type

- string, number, null, undefined, boolean

### Object Type

- Object
  - Array
  - Function
  - RegExp

## 원시 타입과 객체 타입의 차이

- 원시 타입
  - 값 자체로써 변수에 저장되고 복사된다
  - 불변값이다(메모리에 저장된 값을 수정 불가능)
- 객체 타입
  - 참조값을 통해 변수되고 복사된다
  - 가변값이다(메모리에 저장된 값을 수정 가능)

## 원시 타입과 객체 타입을 사용할 때 주의할 점

1. 의도치 않게 값이 수정 된다.

```javascript
// 얕은 복사
//  -> 객체의 참조값을 복사함, 원본 객체가 수정될 수 있어 위험함
const obj = { a: 1 };
const obj2 = obj;

// 깊은 복사
//  -> 새로운 객체를 생성하면서 프로퍼티만 따로 복사, 원본 객체가 수정될 일이 없어 안전
const deepObj = { a: 11 };
const deepObj2 = { ...deepObj };
```

2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다

```javascript
const obj1 = { a: 1 };
const obj2 = obj1;
const obj3 = { ...obj1 };

// 얕은 비교
//  => 참조값을 기준으로 비교
console.log(obj1 === obj2); // true
console.log(obj1 === obj2); // false

// 깊은 비교
//  => 객체를 문자열로 변환하여 비교
// JSON.stringify()? JS 내장 함수, 객체를 문자열로 변환하는 기능
console.log(JSON.stringify(obj1) === JSON.stringify(obj3)); // true
```

3. 배열과 함수도 객체다
