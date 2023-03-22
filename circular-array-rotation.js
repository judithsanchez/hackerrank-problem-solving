function circularArrayRotation(a, k, queries) {
  while (k > 0) {
    a.unshift(a.pop());
    k -= 1;
  }
  const result = queries.map((q) => a[q]);
  return result;
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2])); // 5 3
