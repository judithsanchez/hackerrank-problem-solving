function climbingLeaderboard(ranked, player) {
  let playerRank = [];
  //   ranked.sort((a, b) => b - a);

  for (let i = 0; i < player.length; i++) {
    ranked.push(player[i]);
    ranked.sort((a, b) => b - a);
    let setRanked = [...new Set(ranked)];
    playerRank.push(setRanked.indexOf(player[i]) + 1);
  }

  return playerRank;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));

console.log(
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);
