function performOperationOnArray(array, operation) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const processedElement = operation(element);
    result.push(processedElement);
  }
  return result;
}

function doubleNumber(number) {
  return number * 2;
}

function squareNumber(number) {
  return number * number;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = performOperationOnArray(numbers, doubleNumber);
console.log(doubledNumbers);

const squaredNumbers = performOperationOnArray(numbers, squareNumber);
console.log(squaredNumbers);
