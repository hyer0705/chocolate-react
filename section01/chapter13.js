// 1. 콜백 함수 (Callback Function)
//    - 다른 함수의 매개변수로 전달되거나 반환값으로 사용되는 함수
function main(callback) {
  callback();
}

main(() => console.log("callback function."));

// 2. 콜백 함수의 활용
const repeat = (end, callback) => {
  for (let i = 1; i <= end; i++) {
    callback(i);
  }
};

repeat(5, (num) => console.log(num + 1));
repeat(10, (num) => console.log(num ** 2));
repeat(3, (num) => console.log(num * 3));
