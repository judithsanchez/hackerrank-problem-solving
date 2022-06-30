
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
   let proportionOfPositiveValues = 0;
   let proportionOfNegativeValues = 0;
   let proportionOfZeros = 0;

   for (let i = 0; i < arr.length; i++) {
      
      if (arr[i] > 0) {
         proportionOfPositiveValues++;
      }

      if (arr[i] < 0) {
         proportionOfNegativeValues++;
      }

      if (arr[i] === 0) {
         proportionOfZeros++;
      }
   }

   console.log((proportionOfPositiveValues/arr.length).toFixed(6))
   console.log((proportionOfNegativeValues/arr.length).toFixed(6))
   console.log((proportionOfZeros/arr.length).toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])

