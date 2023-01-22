function formingMagicSquare(s) {
  //This value will be updated with the first absolut difference.
  //You should set a value for minCost that is a high number.
  let minCost = Number.MAX_SAFE_INTEGER;

  // All possible 3x3 magic squares
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  for (let i = 0; i < magicSquares.length; i++) {
    let cost = 0;
    for (let row = 0; row < s.length; row++) {
      for (let col = 0; col < s[row].length; col++) {
        cost += Math.abs(s[row][col] - magicSquares[i][row][col]);
      }
    }
    minCost = Math.min(minCost, cost);
  }

  return minCost;
}
