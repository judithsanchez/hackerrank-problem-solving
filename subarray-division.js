// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

function birthday(s, d, m) {

   if (d < 1 || d > 31) {
      return
   }

   if (m < 1 || m > 12) {
      return
   }

   let possibilities = 0;

   for (let i = 0; i < s.length; i++) {

      if (s[i] < 1 || s[i] > 5) {
         return
      }

      let square = s[i]
      
      for (let j = 1; j < m; j++){

         square = square + s[i+j]
      }

      if (square === d) {
         possibilities++
      }
   }
   return possibilities
}

console.log(birthday([2,2,1,3,2], 4, 2))