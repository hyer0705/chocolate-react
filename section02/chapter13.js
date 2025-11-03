// Promise 객체
//  비동기 메서드를 감싸는 객체
//  비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체

// Promise 상태
//  pending: 아직 작업이 완료되지 않은 상태
//      resolve: 해결 -> fufilled 상태가 됨, reject: 거부 -> rejected 상태가 됨
//  fufilled: 비동기 작업이 성공적으로 마무리 된 상태
//  rejected: 비동기 작업이 실패한 상태

// Promise 결과
//  프로미스 객체를 반환함

// Promise 체이닝

function add10(num) {
  return new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("숫자가 아닙니다.");
      }
    }, 2000);
  });
}

add10(0)
  .then((res) => {
    console.log(res);
    return add10(res);
  })
  .then((res) => {
    console.log(res);
    return add10("호ㅛ요요요요요요요");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
