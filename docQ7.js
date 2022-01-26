// Write a python program to check whether a character is an alphabet or not.

let readlineSync=require("readline-sync")
var alphabet=readlineSync.question("enter the aplabet :")
if (alphabet>="A" && alphabet<="Z" || alphabet>="a" && alphabet<="z"){
    console.log("this is alphabet")

}
else{
    console.log("not alphabet")
}