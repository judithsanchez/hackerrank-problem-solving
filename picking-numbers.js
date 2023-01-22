function pickingNumbers(a) {
  // Initialize maxCount variable with 0
  let maxCount = 0;
  // Create an array of 101 elements filled with 0
  let counts = new Array(101).fill(0);
  // counts = [0, 0, 0, 0, 0, 0, 0, ...] until we get to 101 elements
  // It is 101 because the range is 1-100
  // Iterate over the input array
  for (let i = 0; i < a.length; i++) {
    // Increase the count of the current element in the counts array
    counts[a[i]]++;
  }
  // Iterate over the counts array
  for (let i = 1; i < counts.length; i++) {
    // Compare the count of the current element and the count of the previous element
    maxCount = Math.max(maxCount, counts[i] + counts[i - 1]);
  }
  // Return the maxCount variable as the result
  return maxCount;
}
