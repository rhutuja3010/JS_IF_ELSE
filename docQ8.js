// Write a python program to input any alphabet and check whether it is vowel or consonant.

let readlineSync=require("readline-sync");
var aplabet=readlineSync.question("enter the alphabet :")
if (aplabet=="a"  || aplabet=="e"  || aplabet=="i" || aplabet=="o" || aplabet=="u" ){
    console.log("this is vowel")
}
else{
    console.log("this is consonant")
}