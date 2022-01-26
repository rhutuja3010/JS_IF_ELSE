// Write a python program to check whether a year is leap year or not.

let readlineSync=require("readline-sync");
var year=readlineSync.questionInt("enter the year :")
if (year%100==0){
    if (year%400==0){
        console.log("this is sentury year")
    }
    else{
        console.log("this is not leap year")
    }
}
else{ if(year%4==0){
    console.log("this is leap year")
}
    else{
        console.log("this is not leap year1")
    }

}






