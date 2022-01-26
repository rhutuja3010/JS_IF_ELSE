// Write a python program to input angles of a triangle and check whether triangle is valid or not.

let readlineSync=require("readline-sync");
var traingle_angle=readlineSync.questionInt("enter the angle  :")
var traingle_angle1=readlineSync.questionInt("enter the angle  :")
var traingle_angle2=readlineSync.questionInt("enter the angle  :")
var total_angel=traingle_angle+traingle_angle1+traingle_angle2
if (total_angel==180){
    console.log("this is valid traingle")
}
else{
    console.log("this is not valid traingle")
}