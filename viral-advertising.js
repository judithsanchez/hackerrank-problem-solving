function viralAdvertising(n) {
  let shares = 5;
  let cumulative = 0;
  if (n < 1 && n > 50) {
    return undefined;
  }

  for (let day = 1; day <= n; day++) {
    const likes = Math.floor(shares / 2);
    cumulative += likes;
    shares = likes * 3;
  }

  return cumulative;
}

viralAdvertising(5);