function getArrayParams(...args) {
 let min = Math.min (...args);
 let max = Math.max (...args);
 let sum = args.reduce((accumulator, currentValue) => accumulator + currentValue);
 let averageValue = sum / args.length;
 let avg = +averageValue.toFixed(2)

  return { min: min, max: max, avg: avg };
}





function summElementsWorker(...arr) {
  let initialValue = 0;
  if(arr.length === 0) {
    return 0;
  } else {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}


function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  
  if(arr.length === 0) {
    return 0;
  } else {
    return max - min;
  }
}


function differenceEvenOddWorker(...arr) {
   if(arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}





function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for(let i = 0; i < arrOfArr.length; i++) {
  const element = func(...arrOfArr[i]);
  if(element > maxWorkerResult )
  maxWorkerResult = element;
}
 return maxWorkerResult;
}
