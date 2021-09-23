// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

// this is a function called buildABear with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
// declare a variable of greeting - value is a string with the first parameter interpolated in
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
// decalare a variable called demographics with an array of two elements
  var demographics = [name, age];
// declare a variable called powerSaying with a value of a string and specialPower concatenated in
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// declare an object called buildABear
  var builtBear = {
// declare key value pair of basicInfo with a key of basicInfo and a value of the parameter demographics
    basicInfo: demographics,
// declare key value pair of clothes with a key of clothes and a value of the parameter clothes
    clothes: clothes,
  // declare key value pair of exterior with a key of exterior and a value of the parameter fur
    exterior: fur,
  // delcare key value pair of cost with the key of cost and the value is a number
    cost: 49.99,
  // declare a key value pair of sayings with the key of sayings and the value is two parameters and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
  // declare a key value pair of isCuddly with the key of isCuddly and the value is a boolean
    isCuddly: true,
  };
// declare return statement to end function execution to be returned by the call builtBear
  return builtBear
}

// define buildABear's dynamic parameters
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// define buildABear's other dynamic parameters
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// this is a function called fizzBuzz with 3 parameters of variables
function fizzBuzz(num1, num2, range) {
// declare loop and initialize, give condition, and give increment expression/update
  for (var i = 0; i <= range; i++) {
// delcare if/else condition 1 and log if true. If false, move to next condition
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
// declare condition 2 and log if true. If false, move on to next condition
    } else if (i % num1 === 0) {
      console.log('fizz');
// declare condition 3 and log if true. If false, move on to next condition
    } else if (i % num2 === 0) {
      console.log('buzz');
// declare final condition to log if non of the conditions above evaluate to true
    } else {
      console.log(i);
    }
  }
}

// define dynamic parameters of num1, num2, and num3
fizzBuzz(3, 5, 100);
// define another set of dynamic parameters num1, num2, and num3
fizzbuzz(5, 8, 400);
