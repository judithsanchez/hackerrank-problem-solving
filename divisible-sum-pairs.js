
// Given an array of integers and a positive integer k, determine the number of (i, j) pairs where  i < j and  ar[i]+ar[j]  is divisible by k.

function divisibleSumPairs(n, k, ar) {
   let counter = 0;

   ar.sort((a,b) => a-b)

   for (let i = 0; i < ar.length; i++){

      for (let j = i+1; j < ar.length; j++) {
         if ((ar[i] + ar[j]) % k === 0) {
            counter++
         }
      }
   }
   return counter
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))