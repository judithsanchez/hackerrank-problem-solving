// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
   if (s.length !== 10) {
      console.log("Wrong time format.")
      return
   }

   if (s[8] === "A" && s[9] === "M") {

      if (s[0] === "1" && s[1] === "2") {
         const minutesSeconds = s.slice(2,8)
         const hour = "00"
         s.replace("12", "00")
         return (hour.concat(minutesSeconds))
      }

      return (s.slice(0,8))
   }

   if (s[8] === "P" && s[9] === "M") {

      const time = s.slice(0,8);

      if (s[0] === "1" && s[1] === "2") {
         return time
      }

      const hour = (parseInt(s.slice(0,2)) + 12).toString()
      
      const restOfTime = s.slice(2,8)

      return (hour.concat(restOfTime))
   }
}

console.log(timeConversion("07:05:45PM"))