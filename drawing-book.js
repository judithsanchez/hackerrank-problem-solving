// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:

function pageCount(n, p) {

   let leftToRight = Math.floor(p/2)
   let rigthToLeft = n % 2 == 0 ? Math.floor(((n+1) - p)/2) : Math.floor((n - p)/2)
   return Math.min(leftToRight, rigthToLeft)
}

console.log(pageCount(5, 3))
   