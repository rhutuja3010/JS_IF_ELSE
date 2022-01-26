// Write a python program to input any character and check whether it is alphabet, digit or special character.

let readlineSync=require("readline-sync")
var s=readlineSync.question("enter the alphabet,digit or special_character :")
if (s>="a" && s<="z"|| s>="A" && s<="Z"){
    console.log("this is alphabet")
} 
else if (s>=0 && s<=9){
    console.log("this is digit")
}
else{
    console.log("this is special_character")
}