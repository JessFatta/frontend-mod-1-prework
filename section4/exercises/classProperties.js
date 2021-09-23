/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

//class Dog {

//}

//var animal = new Dog();
//var pet = new Dog();


//console.log(animal);
//console.log(pet);

// Prompt 2: Snack

//class Snack {

//}

//  var chips = new Snack();
//  var cookies = new Snack();

//  console.log(chips);
//  console.log(cookies);

// Prompt 3: Shirt

//class Shirt{

//}

//var clothing = new Shirt();
//var outfit = new Shirt();

//console.log(clothing);
//console.log(outfit);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

/*
class Dog {
  constructor() {
    this.name = "Oliver";
    this.breed = "Lab";
    this.age = 11;
  }
}

 var pet = new Dog();

 console.log(pet);

// Prompt 2: Snack

class Snack{
  constructor(){
    this.type = "chips";
    this.brand = "Lay's";
    this.flavor = "BBQ";
  }
}

var treat = new Snack();
console.log(treat);


// Prompt 3: Shirt

class Shirt{
  constructor(){
    this.color = "blue";
    this.style = "tank";
    this.size = "small";
  }
}

var outfit = new Shirt();
console.log(outfit);

*/
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog{
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}

var pet = new Dog("Oliver", "lab", 11);
console.log(pet);

var rescueDog = new Dog("Stella", "mix", 10);
console.log(rescueDog);

// Prompt 2: Snack

class Snack{
  constructor(type, brand, flavor) {
    this.type = type;
    this.brand = brand;
    this.flavor = flavor;
  }
}

var treat = new Snack("potato chips", "Lay's", "BBQ");
console.log(treat);
var sideDish = new Snack ("corn chips", "fritos", "plain");
console.log(sideDish);

// Prompt 3: Shirt

class Shirt {
  constructor(style, size, color){
    this.style = style;
    this.size = size;
    this.color = color;
  }
}

var clothing = new Shirt("tank", "small", "blue");
console.log(clothing);
var outfit = new Shirt("dress", "medium", "white");
console.log(outfit);
