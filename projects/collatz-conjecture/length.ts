export function collatz(n: number) {
  let num = n;
  const sequence = [num];
  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    sequence.push(num);
  }
  return sequence.length;
}