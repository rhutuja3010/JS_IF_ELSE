// People 5 years and above in age can go to school.
// People 18 years and above in age can vote in elections.
// People 21 years and above in age can drive a car.
// People 24 years and above in age can marry.
// People 25 years and above in age can legally drink.
// takes the age of the user as input. console what all activities the user can do from the list above.
// For example, if user enters age as 20, the code should console:
// You can go to school
// You can vote in elections
// If user enters age as 24, the code will print:
// You can go to school
// You can vote in elections
// You can drive a car
// You can marry

let readlineSync=require("readline-sync");
var age=readlineSync.questionInt("enter the age :");
if (age>=5){
    console.log("you can go to school")
}
if (age>=18){
    console.log("you can vote in election")
}
if (age>=21){
    console.log ("you can drive a car")
}
if (age>=25){
    console.log("you can legally drink")
}


