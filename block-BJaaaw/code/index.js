// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num1=+prompt("Enter your number");
if(num1%2==0){
  alert(`${num1} is an even number`)
}
else{
  alert(`${num1} is odd number`);
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num2=+prompt("Enter first number");
let num3=+prompt("Enter secind number");
if(num2>num2){
  alert(`${num2} is greater`);
}
else{
  alert(`${num3} is greater`);
}
// 3. Convert the above code using`?` terniary operator
const result=num2>num3?`${num2} is greater`:`${num3} is greater`;
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house_Name=+prompt("Enter house name");
if(house_Name==="stark"){
  alert("Winter is coming");
}
else if(house_Name==="lannister"){
  alert("A lannister always pays his debts.");
}
else{
  alert("All men must die.");
}
// 5. Convert the above code using`?` terniary operator
const res1=house_Name==="Stark"?"Winter is coming":"lannister"?"A lannister always pays his debts.":"All men must die."
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month=+prompt("Enter the month number");
switch(month){
  case 1:alert("January has 31 days.");
  break;
  case 2:alert("February has 27 or 28 days");
  break;
  case 3:alert("March has 31 days");
  break;
  case 4 :alert("April has 30 days");
  break;
  case 5:alert("May has 31 days");
  break;
  case 6:alert("June has 30 days");
  break;
  case 7: 
  case 8:alert("July and August has 31 days");
  break;
  case 9: alert("September has 30 days");
  break; 
  case 10:alert("October has 31 days");
  break;
  case 11:alert("November has 30 days");
  break;
  case 12:alert("December has 31 days");
  break;
  default :
  alert("Enter valid number");
  }

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary=+prompt("Enter the total salary");
if(salary<=20000){
  let tax=0.1*salary;   
  let inHandSalary=salary-tax;
  console.log(inHandSalary);
}
else if(salary<= 40000){
    tax=0.2*salary;
    inHandSalary=salary-tax;
    console.log(inHandSalary);
}
else if(salary<=50000){
    tax=0.3*salary;
    inHandSalary=salary-tax;
    console.log(inHandSalary);
}
else("Invalid salary detected!");
//  if..else vs switch

/* 8.
Implement the condition given below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=+prompt(`Enter your marks.`);
if(marks>100){
  alert(`Marks cannot be greater than 100`);
}
else if(marks>80 && marks <100){
  alert(`Grade A`);
}
else if (marks>50 && marks <80){
  alert(`Grade B`);
}
else if(marks >30 && marks){
  alert(` Grade C`);
}
else(
  alert(`Grade D`)
)

// Using Switch statement 
switch(marks){
  case (marks>100):  
    alert(`Marks cannot be greater than 100`);
  case (marks>80 && marks <100):
    alert(`Grade A`);
  case(marks>50 && marks <80):
    alert(`Grade B`);
  case (marks >30 && marks):
    alert(`Grade C`);
  default:
    alert(`Invalid value`);
 }
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let question=prompt(`What is the weather like outside?`);
if(question=="sunny"){
  alert(`Wear a T-shirt`);
}
else if(question=="rainy"){
  alert(`Don't forget to take your raincoat`);
}
else if (question=='hot'){
  alert(`Get a hanky`);
}
else if(question==`freezing`){
  alert(`Get your sweeter on`);
}
else(
  alert(`Not a valid input`)
);

