function hurdleRace(k, height) {
  let magicPotionDose = 0;
  height.sort((a, b) => b - a);
  const tallestHurdle = height[0];
  k > tallestHurdle ? magicPotionDose : (magicPotionDose = tallestHurdle - k);
  return magicPotionDose;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
