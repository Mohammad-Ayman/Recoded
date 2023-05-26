// BoardMember constructor function
function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

// Methods for the BoardMember class
BoardMember.prototype.veto = function () {
  return "No, I must disagree";
};

BoardMember.prototype.approve = function () {
  return "You can do that!";
};

BoardMember.prototype.doCharity = function () {
  return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function () {
  return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function () {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};

// Creating instances of BoardMember
var boardMember1 = new BoardMember("Mohamed", "Egypt", "EEEN");
var boardMember2 = new BoardMember("Ayman", "Turkey", "Coding");

// Accessing properties and methods
console.log(boardMember1.name);
console.log(boardMember2.homeState);
console.log(boardMember1.sayHi());
console.log(boardMember2.veto());
