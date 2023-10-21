function ack(m: number, n: number): number {
  let answer: number;
  if (m === 0) answer = n + 1;
  else if (n === 0) answer = ack(m-1, 1);
  else answer = ack(m-1, ack(m, n-1));
  return answer;
}

for (let i = 0; i < 6; ++i) {
  for (let j = 0; j < 6; ++j) {
    console.log(`ack(${i}, ${j}) = ${ack(i, j)}`);
  }
}