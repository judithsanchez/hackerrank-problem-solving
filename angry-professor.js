// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTime <= 0) to arrived late (arrrivalTime > 0).

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

function angryProfessor(k, a) {
   let count = 0;
   for (let i = 0; i < a.length; i++) {
       if (a[i] <= 0) {
           count += 1
       }
   }

   return count >= k ? "NO" : "YES";
}

console.log(angryProfessor(3, [-2,-1,0,1,2]))

