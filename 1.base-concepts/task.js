"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1
  let x2
  const d = ((b * b) - 4 * a * c);

 if (d > 0) {
  x1 = (-b + Math.sqrt(d) )/(2*a);
  x2 = (-b - Math.sqrt(d) )/(2*a);
  arr = [x1, x2];
}  else if (d == 0) {
  x1 = (-b/(2*a));
  arr = [x1];
} else {
  arr = [];
}
return arr;
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 









}