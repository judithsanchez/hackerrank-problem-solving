// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

function getTotalX(a, b) {
   let numberEvaluated = Math.max(...a)
   let possibilities = []
   let counter = 0;

   for (let i = 0; i <= 100; i++) {
      if (a.every((element)  => numberEvaluated % element === 0)) {
         possibilities.push(numberEvaluated)
      }
      numberEvaluated++
   }

   for (let j = 0; j < possibilities.length; j++) {
      if (b.every((element) => element % (possibilities[j]) === 0)) {
         counter++
      }
   }
   return counter
}

console.log(getTotalX(2, 3))




