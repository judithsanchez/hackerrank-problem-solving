function beautifulDays(i, j, k) {
  // Initialize a variable to keep track of the number of beautiful days.
  let beautifulDays = 0;

  // Determine the starting number to evaluate based on whether i or j is smaller.
  // Loop over the range of numbers to evaluate, inclusive of both i and j.
  for (let num = Math.min(i, j); num <= Math.max(i, j); num++) {
    // Reverse the digits of the current number and convert it to an integer.
    const reversedNum = parseInt(num.toString().split("").reverse().join(""));

    // Calculate the absolute difference between the original and reversed numbers.
    const difference = Math.abs(num - reversedNum);

    // If the difference is divisible by k, increment the count of beautiful days.
    if (difference % k === 0) {
      beautifulDays++;
    }
  }

  // Return the count of beautiful days.
  return beautifulDays;
}

console.log(beautifulDays(20, 23, 6)); // 2
console.log(beautifulDays(13, 45, 3)); // 33
