// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = +prompt("Enter your age");
if (isNaN(age)) {
  alert(`Enter a valid age`);
} else if (age >= 12 && age <= 50) {
  alert("You can participate in the marathon");
} else if (age > 4 && age < 11) {
  alert("You are too young to participate in the marathon");
} else if (age > 55) {
  alert("You are too old to participate in the marthon");
} else {
  alert("Hey Kiddo! Can yOU Walk?");
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let n = +prompt("Enter the value of n");
if (isNaN(n) || n < 0) {
  console.log(`Kindly enter valid positive integer`);
} else {
  repeat = "h" + "e".repeat(n) + "llo";
  console.log(repeat);
}
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let number1 = +prompt(`Enter the value of n`);
if (isNaN(number1)) {
  alert("Kindly enter valid number");
} else {
  let sum = (number1 * (number1 + 1)) / 2;
  // let sum = (n * (n + 1)) / 2;
  alert(sum);
}
/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let value = +prompt("Enter value between 1-9");
switch (value) {
  case 1:
    alert(`One`);
    break;
  case 2:
    alert("Two");
    break;
  case 3:
    alert(`Three`);
    break;
  case 4:
    alert("Four");
    break;
  case 5:
    alert(`Five`);
    break;
  case 6:
    alert("Six");
    break;
  case 7:
    alert(`Seven`);
    break;
  case 8:
    alert("Eight");
    break;
  case 9:
    alert(`Nine`);
    break;
  default:
    alert(`Please try again`);
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks = +prompt(`Enter marks between 0-100`);
if (isNaN(marks) || marks > 100) {
  alert(`Kindly enter valid marks`);
} else {
  switch (true) {
    case marks > 90:
      alert(`AA`);
      break;
    case marks > 80 && marks <= 90:
      alert("AB");
      break;
    case marks > 70 && marks <= 80:
      alert("BB");
      break;
    case marks > 60 && marks <= 70:
      alert("BC");
      break;
    case marks > 50 && marks <= 60:
      alert("CC");
      break;
    case marks > 40 && marks <= 50:
      alert("CD");
      break;
    case marks > 30 && marks <= 40:
      alert("DD");
      break;
    case marks <= 30:
      alert("FF");
      break;
  }
}
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let int1 = +prompt("Enter first Integer");
let int2 = +prompt("Enter second Integer");
if (isNaN(int1) || isNaN(int2)) {
  alert(`Do not enter letter..`);
} else {
  if (int1 > int2) {
    alert(`${int1}`);
  } else {
    alert(`${int2}`);
  }
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let value11 = +prompt(`Enter first number`);
let value22 = +prompt(`Enter second number`);
let value33 = +prompt(`Enter third number`);
if (isNaN(value11) || isNaN(value22) || isNaN(value33)) {
  alert(`Do not enter characters`);
} else {
  let result = value11 * value22 * value33;
  if (result > 0) {
    alert(`+`);
  } else if (result < 0) {
    alert(`-`);
  } else {
    alert(`It is neutral`);
  }
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let num1 = +prompt(`Enter first number`);
let num2 = +prompt(`ENter second number`);
if (isNaN(num1) && isNaN(num2)) {
  alert(`Kindly enter a character`);
} else {
  let sum = num1 + num2;
  alert(`${sum}`);
  let sub = num1 - num2;
  if (num1 < num2) {
    alert(`Number two is greater than number one`);
  } else {
    alert(`${sub}`);
  }
  let mul = num1 * num2;
  alert(`${mul}`);
  let division = num1 / num2;
  if (num1 < num2) {
    alert(`Number two is greater than number one`);
  } else {
    alert(`${division}`);
  }
}
// Happy coding         ~akhilKumar
