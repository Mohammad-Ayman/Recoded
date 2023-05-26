// Scooter constructor function
function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

// Driver constructor function
function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// PickupLocation constructor function
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

// Creating instances of Scooter, Driver, and PickupLocation
const myScooter = new Scooter(2023, "red", "new");
const myDriver = new Driver("Mohamed", 22, "2 years");
const myPickupLocation = new PickupLocation("Istanbul", "Turkey");

// Accessing properties of the instances
console.log(myScooter.year);
console.log(myDriver.name);
console.log(myPickupLocation.address);
