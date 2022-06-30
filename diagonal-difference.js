// Given a square matrix, calculate the absolute difference between the sums of its diagonals.


function diagonalDifference(arr) {
   let rightToLeftDiagonal = 0;
   let leftToRightDiagonal = 0;
   let counter = 0;
   
   if (arr.length !== arr[0].length) {
     console.log("Please provide a valid matrix.")
     return
  }

   for (let i = 0; i < arr.length; i++) {
       rightToLeftDiagonal = rightToLeftDiagonal + arr[i][i];
   }
  
   for (let j = arr.length - 1; j >= 0; j--) {
       leftToRightDiagonal = leftToRightDiagonal + arr[j][counter];
       ++counter 
   }

   return Math.abs(rightToLeftDiagonal - leftToRightDiagonal);
}

console.log(diagonalDifference([[11, 2, 4],[4, 5, 6],[10, 8, -12]]))