// Write a python program to calculate profit or loss.

let purches_prise=1000;
let prise=require("readline-sync")
let selling_prise=prise.questionInt("enter the purches_prise :");
if (purches_prise<selling_prise){
    console.log(selling_prise-purches_prise," :profit")
}
else{
    console.log(purches_prise-selling_prise," :loss")
}