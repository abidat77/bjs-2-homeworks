let numPurchases = prompt();

function parseCount(x) {
  let y = parseFloat(x);
   if(isNaN(y)) {
        throw new Error('Невалидное значение');
   }
    else {
        return y;
    }
}

function validateCount(x) {
    try {
        return parseCount(x);
    } catch (error) {
        return 'Невалидное значение';
    }
}
validateCount(numPurchases);