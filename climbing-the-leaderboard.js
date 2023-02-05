function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] <= num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function climbingLeaderboard(ranked, player) {
  let playerRank = [];
  let setRanked = [...new Set(ranked)];
  setRanked.sort((a, b) => b - a);

  for (let i = 0; i < player.length; i++) {
    if (setRanked.includes(player[i])) {
      playerRank.push(setRanked.indexOf(player[i]) + 1);
    } else {
      let target = player[i];

      let index = binarySearch(setRanked, player[i]);

      setRanked.splice(index, 0, target);

      playerRank.push(setRanked.indexOf(target) + 1);
    }
  }
  console.log(setRanked);
  return playerRank;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));
