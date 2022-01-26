// Write a python program to check whether a character is uppercase or lowercase alphabet.
let readlineSync=require("readline-sync");
var alphabet = readlineSync.question("enter the alphabet :")
if (alphabet>="A" && alphabet<="Z"){
    console.log("this is uppercase ")
}
else{
    console.log("this is lowercase")
}