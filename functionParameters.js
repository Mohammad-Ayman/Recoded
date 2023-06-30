// Function with a parameter
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Recoded"); 


// Function with two parameters
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10)); 


// Function with a parameter that has a default value
function calculateArea(length, width = 5) {
  return length * width;
}

console.log(calculateArea(10)); 
console.log(calculateArea(10, 8)); 
