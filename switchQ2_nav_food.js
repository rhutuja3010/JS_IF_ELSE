// Write a code for navgurukul’s food menu?

var food=require("readline-sync");
var day=food.question("enter the day :")
var time=food.question("enter the food_time :")
switch (day){
    case "monday":
        switch (time){
            case "breackfast":
                console.log("poha")
                break;
            case "lunch":
                console.log("dal chaval")
                break;
            case "dinner":
                console.log("roti subji")
                break;
            default:
                console.log("no")
                break
        }
    case "tuesday":
        switch (time){
            case "breackfast":
                console.log("maggi")
                break;
            case "lunch":
                console.log("methi roti subji")
                break;
            case "dinner":
                console.log("sev roti")
                break;
        }
}
