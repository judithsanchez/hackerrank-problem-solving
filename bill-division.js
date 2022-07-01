// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

function bonAppetit(bill, k, b) {

   let totalBill = bill.reduce((sum, elements) => sum + elements, 0)
   let annasDebt = (totalBill - bill[k]) / 2

   return (b <= annasDebt ? console.log("Bon Appetit") : console.log(b - annasDebt))
}

console.log(bonAppetit([3, 10, 2, 9],1,12))