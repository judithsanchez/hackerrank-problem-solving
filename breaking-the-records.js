// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

function breakingRecords(scores) {

   if (scores.length < 1 && scores.length > Math.pow(10, 8)) {
      return
   }

   let minRecord = scores[0], maxRecord = scores[0], minBrokenRecord = 0, maxBrokenRecord = 0;

   for (let i = 0; i < scores.length; i++) {

      if (scores[i] < 0 && scores[i] > 1000) {
         return
      }
      
      if (scores[i] < minRecord) {
         minRecord = scores[i];
         minBrokenRecord++
      }

      if (scores[i] > maxRecord) {
         maxRecord = scores[i];
         maxBrokenRecord++
      }
   }
   return [maxBrokenRecord, minBrokenRecord]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))



