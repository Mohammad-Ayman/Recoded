// Function expression as a callback for array method
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers); 

// Arrow function with implicit return
const sum = (a, b) => a + b;
console.log(sum(3, 5)); // Output: 8

// Arrow function for filtering
const students = [
  { name: 'Mohamed', age: 21 },
  { name: 'Ahmed', age: 19 },
  { name: 'Recoded', age: 23 },
];
const adultStudents = students.filter(student => student.age >= 18);
console.log(adultStudents); 

// Arrow function in setTimeout
setTimeout(() => {
  console.log('Delayed execution');
}, 2000); 

// Arrow function for object methods
const person = {
  name: 'Recoded',
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}.`); 
  }
};
person.sayHello();
