function catAndMouse(x, y, z) {

   if (Math.abs(x - z) < Math.abs(y - z)) {
      return "Cat A"
   }

   if (Math.abs(y - z) < Math.abs(x - z)) {
      return "Cat B"
   }

   return "Mouse C"

}

console.log(catAndMouse(2, 2, 4))