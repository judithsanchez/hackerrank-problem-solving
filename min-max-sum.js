// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
   let numbers = arr;
  let minMaxSum = [];
  let minSum = 0;
  let maxSum = 0;
  numbers.sort((a, b) => a - b);
  for (let i = 0,  j = arr.length -1; i < 4; i++, j-- ) {
     minSum = minSum + arr[i];
     maxSum = maxSum + arr[j];
  }
  minMaxSum.push(`${minSum} ${maxSum}`)
  console.log(minMaxSum.toString(" "))
}

console.log(miniMaxSum([1,2,3,4,5]))