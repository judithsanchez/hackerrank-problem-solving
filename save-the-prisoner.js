function saveThePrisoner(n, m, s) {
  return (m + (s - 1)) % n || n;
}

saveThePrisoner(3, 7, 3); // 3
// 3, 1, 2, 3, 1, 2, 3

// function saveThePrisonerLoop(n, m, s) {
//   let treats = m + (s - 1);
//   while (treats > 0) {
//     for (let seat = 1; seat < n + 1; seat++) {
//       treats--;
//       if (treats === 0) {
//         return seat;
//       }
//     }
//   }
// }
// console.log(saveThePrisonerLoop(50, 120, 2));


