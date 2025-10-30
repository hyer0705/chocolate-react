// 1. Falsy - 7가지가 있음
const f1 = undefined;
const f2 = null;
const f3 = 0;
const f4 = -0;
const f5 = NaN;
const f6 = 0n;
const f7 = "";

// 2. Truthy
//  Falsy한 값 7개를 제외한 값
const t1 = {};
const t2 = [];
const t3 = () => console.log(true);
const t4 = "hello";
const t5 = 123;

if (t3) {
  t3();
}

// 활용사례
function displayName(person) {
  if (!person) {
    console.log("존재하지 않는 유저입니다.");
    return;
  }

  console.log(`user name: ${person.name}`);
}

const person = { name: "Lucy" };
displayName(person);
