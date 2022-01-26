// Write a code for calculato

var num=require("readline-sync");
var num1=num.questionInt("enter the 1st number :");
var num2=num.questionInt("enter the 2nd number :");
var operator=num.question("enter the operator :")
switch (operator){
    case "+":
        console.log(num1+num2);
        break
    case "-":
        console.log(num1-num2);
        break
    case "*":
        console.log(num1*num2)
        break

}