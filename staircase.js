function staircase(n) {

   let stairs = []
   let counterSecondLoop = n-(n-1);
   let counterThirdLoop = n-1;
   
   for (let m = 0; m < n; m++) {

      for (let j = counterThirdLoop; j > 0; j--) {
         stairs.push(" ");
      }

      counterThirdLoop--;

      for (let i = 1; i <= counterSecondLoop; i++) {
         stairs.push("#");
      }

      stairs.push("\n")
      counterSecondLoop++
   }
   console.log(stairs.join(''));
}

console.log(staircase(10))

