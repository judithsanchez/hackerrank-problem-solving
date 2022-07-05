const arr = [8, 9, 9, 7, 7, 7, 3, 2, 2, 9]

function migratoryBirds(arr) {
   // Object to store the information.
   let seenBirds = {}

   // If the array is already sorted I can alway return the first element because even if another bird has been seen the same number of times, this will always be the smaller.
   arr.sort((a, b) => a - b)

   // Array with different types of birds.
   const birdsIDS = [...new Set(arr)];

   // Loop to add the bird types as properties of the objects. All the values are going to start on 0.
   for (let i = 0; i < birdsIDS.length; i++) {
      seenBirds[birdsIDS[i]] = 0
   }

   // Turn object into array.
   seenBirds = Object.entries(seenBirds);

   // Loop to add to the second value of the nested array the number of times a bird has been seen.
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < seenBirds.length; j++) {
         if (arr[i] == seenBirds[j][0]) {
            seenBirds[j][1]++
         }
      }
   }

   // Sort the array according to the "value".
   seenBirds.sort((a, b) => b[1] - a[1])

   // Return first element of the array.
   return seenBirds[0][0]
}

console.log(migratoryBirds(arr))


