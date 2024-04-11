"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const Discriminant = b ** 2 - 4 * a * c;
   
  if(Discriminant === 0) {  
    arr.push((-b / 2 * a));
  }

  else if(Discriminant > 0) {
  let rootEquation = [];
  rootEquation.push((-b + Math.sqrt(Discriminant)) / (2 * a));
  rootEquation.push((-b - Math.sqrt(Discriminant)) / (2 * a));
  arr = rootEquation;
};
return arr;
};

solveEquation(2, 4, 1);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent / 100 / 12;
  let loanBody = amount - contribution;
  let payment = loanBody * (P + (P / (((1 + P) ** countMonths) - 1)));
  let totalAmount = payment * 12;
  +totalAmount.toFixed(2);
  return;
};

calculateTotalMortgage(10, 20000, 20000, 48);