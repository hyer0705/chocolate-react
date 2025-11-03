// 비동기 작업 처리하기
//  1. 콜백 함수
//      단점: 콜백 지옥을 만들면 코드의 가독성이 떨어진다

const orderFood = (food, callback) => {
  setTimeout(() => {
    callback(food);
  }, 3000);
};

const cooldownFood = (food, callback) => {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;

    callback(cooldownedFood);
  }, 3000);
};

const frozenFood = (food, callback) => {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;

    callback(freezedFood);
  }, 3000);
};

const requestFood = "Hanburger";

orderFood(requestFood, (food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(`${cooldownedFood}`);

    frozenFood(cooldownedFood, (freezedFood) => {
      console.log(`${freezedFood}`);
    });
  });
});
