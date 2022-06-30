// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
   candles.sort((a,b) => a - b);
   const tallestCandle = candles[candles.length-1]
   let tallCandles = 0;
   for (let i = 0; i < candles.length; i++) {
      if (candles[i] === tallestCandle) {
         tallCandles++
      }
   }
   console.log(tallCandles)
   return tallCandles;
}

birthdayCakeCandles([3,2,1,3])