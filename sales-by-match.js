// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
   let pairs = 0;
   let socksPile = ar;

   for (let i = 0; i < socksPile.length; i) {
      let currentSock = 1;

      for (let j = 1; j < socksPile.length; j++) {

         if (socksPile[i] === socksPile[j]) {
            currentSock++
         }
      }
      socksPile % 2 === 0 ? pairs += (currentSock/2) : pairs += (Math.floor(currentSock/2))
      socksPile = socksPile.filter(x => x !== socksPile[i]);
   }
   return Math.floor(pairs)
}

console.log(sockMerchant(9, [10, 20, 20, 2, 10, 10, 30, 2, 50, 10, 20, 60, 70, 80, 1]))


