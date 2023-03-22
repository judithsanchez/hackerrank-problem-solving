function circularArrayRotation(a, k, queries) {
  const result = [];

  while (k > 0) {
    a.unshift(a.pop());
    k -= 1;
  }

  for (let i = 0; i < queries.length; i++) {
    result.push(queries.indexOf(queries[i]));
  }

  return result;
}

circularArrayRotation([3, 4, 5], 2, [1, 2]);
