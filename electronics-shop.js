function getMoneySpent(keyboards, drives, b) {
   let sum = []

   for (let i = 0; i < keyboards.length; i++) {
      for (let j = 0; j < drives.length; j++) {
         sum.push(keyboards[i] + drives[j])
      }
   }
   sum.sort((a, b) => b - a)

   for (let i = 0; i < sum.length; i++) {
      if (sum[i] <= b) {
         return sum[i]
      }
   }
   return -1
}

// console.log(getMoneySpent([40, 60, 50], [8, 5, 12], 60))
// console.log(getMoneySpent([3, 1], [5, 2, 8], 10))

