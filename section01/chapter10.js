// for(초기식; 조건식; 증감식){}
// continue 문: continue 아래 코드는 실행하지 않고 바로 증감식으로 넘어간다
// break 문: 반복문을 빠져나온다
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;

  console.log(i);

  if (i === 5) break;
}
