// https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=true

function permutationEquation(p) {
  const result = [];

  for (let i = 1; i <= p.length; i++) {
    const a = p.indexOf(i) + 1;
    const b = p.indexOf(a) + 1;
    const c = p.indexOf(b) + 1;
    result.push(p[c - 1]);
  }

  return result;
}

console.log(permutationEquation([5, 2, 1, 3, 4]));
console.log(permutationEquation([4, 3, 5, 1, 2]));
