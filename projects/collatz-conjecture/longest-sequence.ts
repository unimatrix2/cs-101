import { collatz } from './length';

interface Result {
  input: number;
  size: number;
}

function longestCollatz(inputArray: number[]) {
  const results: Result[] = [];
  for (let i = 0; i < inputArray.length; i++) {
    results.push({ input: inputArray[i], size: collatz(inputArray[i]) });
  }
  return results.reduce((acc, curr) => (acc.size > curr.size ? acc : curr)).input;
}

console.log(longestCollatz([1, 5, 27, 4]))