function pickingNumbers(a) {
   a.sort((a,b) => a-b)

   let multiset = []

   for (let i = 0; i < a.length; i++) {
      let subArr = []

      for (let j = 0; j < a.length; j++) {
         if (Math.abs(a[i]-a[j]) <= 1) {
            subArr.push(a[j])
         }
      }
      multiset.push(subArr)
   }

   multiset.sort((a,b) => b.length-a.length)

   let finalResult =  []

   for (let i = 0; i < multiset[0].length; i++) {
      let subArr = []

      for (let j = 0; j < multiset[0].length; j++) {
         if (Math.abs(multiset[0][i]-multiset[0][j]) <= 1) {
            subArr.push(multiset[0][j])
         }
      }
      finalResult.push(subArr)
   }

   
   return finalResult.length
}


console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))
