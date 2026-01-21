// 2. Identify why the following code throws an error and fix it without using the class keyword.
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function() {
//   console.log(`${this.name} is eating.`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// // Intent: Dog should inherit from Animal
// Dog.prototype = Animal.prototype; 

// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };

// const myDog = new Dog("Buddy", "Golden");
// const genericAnimal = new Animal("Generic");

// genericAnimal.bark(); // Why does this happen?
// console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?


function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen?
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?



/*

why does this happen?

First of all the line number 43 tells that dog's prototype is exactly the same object as Animal's prototype so they share the same memory space.
at line 45 we are try to add bark to the dogs but animal and dog share the same memory space so it is also added to animal therefore it is able to call the function successfully

Why is this 'Animal' and not 'Dog'?

At line number 37 we define a constructor of dog  so Dog.prototype has a nametag saying constructor:Dog at line number 43 we are trying say js throw away the existing dog prototype 
now points to animal prototype therefore at line number 53 animal constructor is called.

 */



