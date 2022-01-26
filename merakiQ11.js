// Take two numbers as input from the user. Console the number which is greater.

let readlineSync=require("readline-sync")
var var1=readlineSync.questionInt("enter the 1st number :")
var var2=readlineSync.questionInt("enter the 2nd number :")
if (var1>var2){
    console.log(var1,"is garter")
}
else {
    console.log(var2,"is grater")
}