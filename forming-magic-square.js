function formingMagicSquare(s) {
   const magicConstant = s.length*((Math.pow(s.length, 2)+1)/2)
   let cost = 0;
   let direction;

// Step 1: organize arrays into rows.
   let row0 = s[0]
   row0Sum = row0.reduce((accumulator, currentValue) => {return accumulator + currentValue})
   let column0 = [s[0][0], s[1][0], s[2][0]]
   column0Sum = column0.reduce((accumulator, currentValue) => {return accumulator + currentValue})
   console.log("Row0: ", row0, row0Sum, "Column0: ", column0, column0Sum)

   let row1 = s[1]
   row1Sum = row1.reduce((accumulator, currentValue) => {return accumulator + currentValue})
   let column1 = [s[0][1], s[1][1], s[2][1]]
   column1Sum = column1.reduce((accumulator, currentValue) => {return accumulator + currentValue})
   console.log("Row1: ", row1, row1Sum, "Column1: ", column1, column1Sum)

   let row2 = s[2]
   row2Sum = row2.reduce((accumulator, currentValue) => {return accumulator + currentValue})
   let column2 = [s[0][2], s[1][2], s[2][2]]
   column2Sum = column2.reduce((accumulator, currentValue) => {return accumulator + currentValue})
   console.log("Row2: ", row2, row2Sum, "Column2: ", column2, column2Sum)

// Step 2: check if 5 is in the middle of the arrays.

   if (row1[1] !== 5) {
      let originalNum = row1[1]
      row1[1] = 5
      cost += Math.abs(5 - originalNum)
   }

// Step 3: fix the row1.

if (row0[1] !== row1[2]) {



} else {

   if (column0Sum === magicConstant) {

      // Fix column 2

      

   } else {

      // Fix column 0

   }

}

   return cost
}

console.log(formingMagicSquare([[4,9,2],[3,5,1],[8,1,5]]))



// console.log(formingMagicSquare([[4,9,2],[7,5,3],[8,1,5]]))
// console.log(formingMagicSquare([[5,3,4],[1,5,8],[6,4,2]]))
// console.log(formingMagicSquare([[8,1,6],[3,5,7],[4,9,2]]))
// console.log(formingMagicSquare([[4,8,2],[4,5,7],[6,1,1]]))


// Step 3: get the start direction.

   // if (row1Sum === magicConstant) {
   //    direction = Math.abs(row1[1] - row1[0])

   // } else {

   //    if (Math.abs(row1[1] - row1[0]) % 2 === 0) {
   //       direction = Math.abs(row1[1] - row1[0]) 
   //    }

   //    if (Math.abs(row1[1] - row1[2]) % 2 === 0) {
   //       direction = Math.abs(row1[1] - row1[2]) 
   //    }
   // }



   // if (Math.abs(row1[1] - row1[2]) !== direction) {

   //    if (row1[2] > row1[0]) {
   //       row1[2] = row1[1] + direction

   //    } else {
   //       row1[2] = row1[1] - direction
   //    }
   //    cost = cost + Math.abs(row1[2] - originalValue)
   // } 