// code the change like if I give number as 21, 21 is divisible by both 3 and 7 so it should give Chacolate as answer to me.
// sample inputs and outputs:
// for 21 answer Chacolate
// for 15 answer choco
// for 14 answer late
// for 13 answer Not divisible by 3 , 7



var number = 14;
if(number % 3==0 && number % 7==0) {
    console.log("Chocolate")
 }
else if(number % 7==0){
   console.log("late")
}
else if(number % 3 == 0){
   console.log("Choco")
}

else {
   console.log("Not divisible by 3 , 7")
}