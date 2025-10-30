// if 조건문 (if 문)

const num = 10;
if (num >= 10) {
  console.log("num is greater than 10.");
} else if (num >= 5) {
  console.log("Num is greater than 5.");
} else if (num >= 3) {
  console.log("Num is is greater than  3.");
} else {
  console.log(false);
}

// Switch 문
//  -> 다수의 조건을 처리할 때 보다 if 문보다는 더 직관적이다.
let animal = "mouce";

switch (animal) {
  case "mouse":
    console.log("I'm mouce");
    break;
  case "tiger":
    console.log("I'm tiger");
    break;
  case "bear":
    console.log("I'm bear");
    break;
  case "salmon":
    console.log("I'm salmon");
    break;
  default:
    console.log("I'm animal");
    break;
}
