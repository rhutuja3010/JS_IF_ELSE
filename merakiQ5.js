
let readlineSync = require("readline-sync");
var num=readlineSync.questionInt("enter the number :");
if (num<10){
    console.log("num is less than 10")
}
else if (num>=10 && num<20){
    console.log("num is less than 20")
}
else {
    console.log("num is grater than 20")
}