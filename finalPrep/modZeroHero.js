// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Mod Zero Hero";
console.log(heroName);

var specialAbility = "Front End Programming";
console.log(specialAbility);

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Good morning, " + heroName;
console.log(greeting);

var catchphrase = `In ${specialAbility}, with great power comes great responsiblity`
console.log(catchphrase);

// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 1;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
console.log(fullPower);

var fullEnergy = energy + 150;
console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["lack of caffine", "not enough sleep", "distractions"];
var sidekicks = ["coffee", "support system", "water"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
var archEnemy = ["low battery"];
archEnemies.push(archEnemy);

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var dangerLevel = 15;
var saveTheDay = "All in a day's work";
var badExcuse = "I need to call for backup";

function assessSituation(){
  if (dangerLevel > 50){
    console.log(badExcuse);
  } else if ((dangerLevel >= 10) || (dangerLevel <= 50)){
    console.log(saveTheDay);
  } else if (dangerLevel < 10){
      console.log("Meh. Hard pass.")
  }
};
assessSituation();

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// I'm a litte confused about this test case.. Am I supposed to complete this as a seperate function or this is just a guideline for our above function?

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster ={
  name: "Failure",
  smell: "wasted money",
  weight: "20000",
  citiesDestroyed: ["New Symrna Beach", "Denver", "Ormond Beach"],
  luckyNumbers: ["11", "24", "29"],
  address: {
    number: 45,
    street: "E Bayshore Drive",
    state: "Florida",
    zip: 32176,
  }
};
console.log(scaryMonster);

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor(name, superpower, age, archNemesis, powerLevel, energyLevel){
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  incrementgainPower(){
    this.powerLevel = 200;
  }
  maximizeEnergy(){
    this.energyLevel = 1000;
    return this.energyLevel
  }
}

var sayName = new SuperHero("Jess")
console.log(sayName);


sayName.maximizeEnergy(1000);
console.log(sayName);

sayName.incrementgainPower();
console.log(sayName);

// Reflection
// What parts were most difficult about this exerise?

// The most difficult for me was definitely the final exercise. I still need to work on getting class methods down.
// I'm still pretty confused so I hope what I did was correct. It logged what I wanted for me but I was a little
// confused on the gainPower part. I know how to increment by 1 using ++ but increasing powerLevel by that number
// was new to me.

// What parts felt most comfortable to you?

// Variables, interpolation and concatenation, and objects.

// What skills do you need to continue to practice before starting Mod 1?

// class methods and a little more practice with if/else statements.
//
