function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  // This is the end condition
  while (start <= end) {
    // The middle will determine where it will start counting and the "direction"
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
      // If the middle is less (7) than then number (10)
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}

// let array = [10, 5, 3, 7, 2, 9, 1102, 45];
// let target = 11;

// let index = binarySearch(array, target);

// array.splice(index, 0, target);

// console.log(array);

function climbingLeaderboard(ranked, player) {
  let playerRank = [];
  let setRanked = [...new Set(ranked)];
  setRanked.sort((a, b) => b - a);

  for (let i = 0; i < player.length; i++) {
    if (setRanked.includes(player[i])) {
      playerRank.push(setRanked.indexOf(player[i]) + 1);
    } else {
      setRanked.push(player[i]);
      //   setRanked.sort((a, b) => b - a);
      setRanked.splice(binarySearch(setRanked, player[i]), 0, player[i]);
      playerRank.push(setRanked.indexOf(player[i]) + 1);
    }
  }

  return playerRank;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));

console.log(
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);
