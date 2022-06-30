// Given an array of integers, find the sum of its elements.

// function simpleArraySum(ar) {
//    var x = ar[0];
//    for (var i = 1; i < ar.length; i++) {
//        x = x + ar[i]
//    }
//    return x
// }

function simpleArraySum(ar) {
   return ar.reduce((sum, element) => sum + element, 0)
}
console.log(simpleArraySum([1,2,3,4,5]))