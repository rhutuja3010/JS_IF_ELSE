// Write a python program to check whether a number is negative, positive or zero.

let readlineSync=require("readline-sync");
var number=readlineSync.questionInt("enter the number :")
if (number <0){
    console.log("negative no")
}
else if (number>0){
    console.log("positive no")

}
else{
    console.log("zero")
}

