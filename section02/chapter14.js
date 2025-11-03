// async/await

// async
//  어떤 함수를 비동기 함수로 만들어주는 키워드
//  함수가 프로미스를 반환하도록 변환해주는 키워드
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: "Lu75",
        username: "Lu",
      });
    }, 1500);
  });
}

// await
//  async 키워드를 사용한 함수에서 사용할 수 있는 키워드
//  비동기의 작업을 기다려준다

async function printData() {
  const data = await getData();

  console.log(data, "...?");

  return data; // 아마도 저 await 동작을 기다리기 전에 반환 처리가 먼저 되는 것일까?
}

console.log(printData());
