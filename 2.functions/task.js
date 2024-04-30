function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    let number = arr[i];
    sum += number;
    if (max < number) max = number;
    if (min > number) min = number; 
  }
  let avg = +(sum / arr.length).toFixed(2); 
  return { min: min, max: max, avg: avg }
  }
  
getArrayParams(-99, 99, 10);



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
