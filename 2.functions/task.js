function getArrayParams(...args) {
 let min = Math.min (...args);
 let max = Math.max (...args);
 let sum = args.reduce((accumulator, currentValue) => accumulator + currentValue);
 let averageValue = sum / args.length;
 let avg = +averageValue.toFixed(2)

  return { min: min, max: max, avg: avg };
}





function summElementsWorker(...arr) {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}


function differenceMaxMinWorker(...arr) {
  let min = Math.min (...arr);
  let max = Math.max (...arr);
  let difference = max - min;
  return difference;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let valueDifference;
  for ( let i = 0, i < arr.length, i++ ) {
    if (i % 2 === 0) {
      sumEvenElement ++ ; 
    } else {
      sumOddElement ++ ;
    }
  }
  valueDifference = sumEvenElement - sumOddElement;
  
  return valueDifference;
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result;
  for ( let i = 0, i < arr.length, i++ ) {
    if (i % 2 === 0) {
      sumEvenElement ++i; 
      countEvenElement ++;
    }
  }
  result = sumEvenElement / countEvenElement;

  return result;
}


function makeWork (arrOfArr, func) {

}
