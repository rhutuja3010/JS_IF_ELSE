let num1 = 300 - 123;
var readlineSync=require("readline-sync")
let num2 = readlineSync.question("enter the number :")
if (num1==num2){
    console.log("equal")
}
else{
    console.log("not equal")
}