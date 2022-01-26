// Take two numbers as input from the user in variables varx and vary.
// Check whether varx is divisible by vary.
// If yes, console Divisible else console Not Divisible.

let readlineSync=require("readline-sync")
var varx=readlineSync.questionInt("eneter the 1st number :")
var vary=readlineSync.questionInt("eneter the 2nd number :")
if (varx % vary==0){
    console.log("divisible")
}
else{
    console.log("not divisible")
}
