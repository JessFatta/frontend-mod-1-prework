/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
Between lines 14 and 18 are if/else statement structure. What its saying is if you choose door 1,
the bear will be wearing a hat. It will ask the computer does doorChoice equal 1? If the
doorChoice is not equal to 1, then bearClothing changes to scarf.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27 and 35 are else/if statements, which can help us create more complex
statements. If bearChoice is equal to 1, then the block of code that executes is "you offer the
bear your bearClothing and the bear shows you a secret passage out." If bearChoice is not
equal to 1, then it moves to the following else if statement. Example: bearChoice equals 2 executes
too small and starts to cry, bearChoice equals 3 executes you run as fast as you can
into the next room. If bearChoice does not equal to 1, 2, or 3, then the code executes
"you stay with the bear and become its best friend."


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"you run as fast as you can into the next room. It's full of snakes!" yikes.


6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"


7. What is your favorite ending?
"You stay with the bear and become it's best friend!" Who wouldn't want a bear
for a best friend?
*/
