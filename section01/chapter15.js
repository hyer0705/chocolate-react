// 1. 객체 생성
const idol = new Object(); // 객체 생성자
const idol2 = { name: "SAZA BOYZ" }; // 객체 리터럴 생성

// 2. 객체 프로퍼티 (객체 속성)
const idle = {
  name: "IDLE",
  category: "KPOP girl group",
  debut: "2018.05.02",
  member: ["Miyeon", "Minnie", "Soyeon", "Yuqi", "Shuhwa"],
  10: 20,
};

// 3. 객체 프로퍼티를 다루는 방법

// - 특정 프로퍼티에 접근: 점 표기법, 괄호 표기법
idle.name;
idle["member"];

// - 새로운 프로퍼 추가
idle.hitSong = ["QueenCard", "Klaxon", "Tomboy"];
idle["leader"] = "Soyeon";

// - 프로퍼티 수정
idle.debut = new Date("2018.05.02");
idle["category"] = "KPOP Girl Group";

// - 프로퍼티 삭제
delete idle.leader;
delete idle[10];

console.log(idle);

// 프로퍼티의 존재 유무를 확인하는 방법: in 연산자
console.log("leader" in idle);
console.log("member" in idle);
