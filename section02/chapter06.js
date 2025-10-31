// 배열 순회
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of
for (const item of arr) {
  console.log(item);
}

// 객체 순회
const obj = {
  name: "Lu",
  age: 29,
  location: "Korea",
};

// Object.keys()
//  -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
const objKeys = Object.keys(obj);
for (const key of objKeys) {
  const value = obj[key];
  console.log(key, value);
}

// Object.values()
//  -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
const objValues = Object.values(obj);
for (const value of objValues) {
  console.log(value);
}

// for in
for (const key in obj) {
  const value = obj[key];
  console.log(key, value);
}
