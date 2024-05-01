function getArrayParams(...arr) {
  if (!arr) return 0;
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
  if (arr.length === 0) {
    return 0;}
   let sum = 0;
    for (let element of arr) {
      sum += element;
    }
   // arr.reduce((accumulator, currentValue) => {
   // sum = accumulator + currentValue;
   // }, 0) 
   //Хотела сделать через reduce, но не проходит проверки, буду благодарна, если подскажете!
     return sum;
}
summElementsWorker(10, 10, 11, 20 ,10);

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;}
let differenceMaxMin = Math.max(...arr) - Math.min(...arr);
return differenceMaxMin;
}
differenceMaxMinWorker(10, 10, 11, 20, 10);

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;}

    /*let = sumEvenNumbers = 0;
    let = sumOddNumbers = 0;
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (num %2 === 0){
        sumEvenNumbers += num;
      }
      else(num %2 !== 0){
        sumOddNumbers += num;
      }   
    }
    let differenceEvenOdd = sumEvenNumbers - sumOddNumbers;
    return differenceEvenOdd;*/
//Не получилось сделать задание как написано, сделала альтернативным способом.
    let evenNumbers = arr.filter(num => num %2 === 0);
    let oddNumbers = arr.filter(num => num %2 !== 0);
    const oddSum = oddNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const evenSum = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let differenceEvenOdd = evenSum - oddSum;
    return differenceEvenOdd;
}

differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;}

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (const num of arr) {
    if(num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement ++;
    }
  }
  let avg = sumEvenElement / countEvenElement;
  return avg;
}

function makeWork (arrOfArr, func) {

}
