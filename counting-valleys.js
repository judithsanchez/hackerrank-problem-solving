function countingValleys(steps, path) {
   let valleys = 0, counter = 0;

   for (let i = 0; i < path.length; i++) {
      path[i] === "U" ? counter++ : counter--; 

      // console.log(path[i], counter)

      if (path[i] === "D" && counter === -1) {
         valleys++
      }
   }
   return valleys
}


console.log(countingValleys(8,["U", "D", "D", "D", "U", "D", "U", "U"]))
console.log(countingValleys(12,["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"]))

