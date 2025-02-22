/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents);


// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);


/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);


/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);


// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);


// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);


// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);


// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
// the value 4 is less than the value 9. The comparison will log true.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// the variable books has a value of 3.
// the console log says 4 is less than books aka 3.
// this will log false because 4 is greater than 3

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// the variable friends has a value of 6
// the variable siblings has a value of 2
// the console log says friends aka 6 is greater than siblings aka 2
// this will log true because 6 is greater than 2

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// the variable attendees has a value of 9
// the variable meals has a value of 8
// the console log says attendees aka 9 is not equal to meals aka 8
// this will log true because 9 is not equal to 8

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// false because logical AND operators only return true when both of its
// operands are true and isHungry = true and finishedHomework = false

// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
// true because logical OR operators only return false when both
// operands are false and isHungry is true and finishedHomework is false

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats

console.log(lovesToPlay && lovesTreats);
// true because lovesToPlay is true and lovesTreats is true and in
// logical AND operators the operator only returns true when
// both of its operands are true

// Determine if the dog loves to play and loves the dog park

console.log(lovesToPlay && lovesDogPark);
// false because lovesToPlay is true and lovesDogPark is false and in
// logical AND operators the operator only returns true when both of its
// operands are true

// Determine if the dog loves to play or loves the dog park

console.log(lovesToPlay || lovesDogPark);
// true because lovesToPlay is true and lovesDogPark is false and in logical
// OR operators the operator only returns false when both of its operands
// are false

// Determine if the dog loves to play and is a puppy


// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
console.log(lovesToPlay && age);

// evaluated to 1
// I think it evaluated to 1 because in && operators, if the first operand is true,
// and lovesToPlay is true, so it returns 1. If lovesToPlay was
// false then it would have evaluated to false. I figured this out by running
// console.log(lovesDogPark && age);
// when I ran console.log(lovesDogPark && age);, the response was just false

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect?
