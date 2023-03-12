"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  const d = ((b * b) - 4 * a * c);

 if (d > 0) {
  x1 = ((-b + Math.sqrt(d) )/(2*a));
  x2 = ((-b - Math.sqrt(d) )/(2*a));
  arr = [x1, x2];
}  else if (d === 0) {
  x1 = (-b/(2*a));
  arr = [x1];
} else {
  arr = [];
}
return arr;
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
   return false;
 } else {
   let interestRate, amountOfCredit, payment, sum;
   interestRate = (percent / 100) / 12;
   amountOfCredit = amount - contribution;
   payment = amountOfCredit * (interestRate + (interestRate / (((1 + interestRate)^countMonths) - 1)));
   sum = payment * countMonths;

   }
   return sum;
 }
   