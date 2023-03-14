function getArrayParams(...args) {
 let min = Math.min (...args);
 let max = Math.max (...args);
 let sum = args.reduce((accumulator, currentValue) => accumulator + currentValue);
 let averageValue = sum / args.length;
 let avg = +averageValue.toFixed(2)

  return { min: min, max: max, avg: avg };
}







function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
