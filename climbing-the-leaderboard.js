// Because this is faster than pushing the number and sorting after every iteration.
// This will split in the middle the array and determine the direction where it should iterate.
function binarySearch(arr, num) {
  // Should be 0 because that is the start of the array!
  let start = 0;
  // This value determines the exit condition of the loop.
  let end = arr.length - 1;

  // "Keep going as long as start is less or equal to end."
  while (start <= end) {
    // On the first iteration it finds the middle of the array. Keep in mind that this rounds down, so it would fall into the left value.
    let mid = Math.floor((start + end) / 2);
    // What these conditions are doing is narrowing the range where the target number should go after every iteration.
    if (arr[mid] <= num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function climbingLeaderboard(ranked, player) {
  // Here it will return the pistion ranking of the player's score every time they play.
  let playerRank = [];
  // Since it uses dense ranking if 2 or more players have the same score the share the same ranking. So, I don't need repeated numbers. That's why I am using set to delete them.
  let setRanked = [...new Set(ranked)];
  // It needs to be in descending order.
  setRanked.sort((a, b) => b - a);

  // Now I will take every score the player had and see their position on the raking every time.
  for (let i = 0; i < player.length; i++) {
    // The score the player got in that game.
    let target = player[i];
    // I need to know where said score should go on the given rank.
    // The function I am calling needs and array organized on descending order and the number you would like to add on the right possition.
    let index = binarySearch(setRanked, target);

    // The following line asks if the number is not already present in the set.
    if (index === setRanked.length && setRanked[index - 1] !== target) {
      // If it is not, it will be added.
      setRanked.splice(index, 0, target);
    }
    // It gets the right index and adds it to the player's rank.
    playerRank.push(index + 1);
  }
  return playerRank;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));
