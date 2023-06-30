// Reset the number
let number = 10;

function addFive() {
  return (number += 5);
}

function divideByThree() {
  return (number /= 3);
}

console.log(parseFloat(divideByThree().toFixed(2))); // Output: 3.33

console.log(parseFloat(addFive().toFixed(2))); // Output: 8.33

// Reset the number
number = 10;

console.log(parseFloat(addFive().toFixed(2))); // Output: 15

console.log(parseFloat(divideByThree().toFixed(2))); // Output: 5
