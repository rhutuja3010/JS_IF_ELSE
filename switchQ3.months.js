// If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.
// If the month is 4, 6, 9, or 11, the number of days in that month is 30.
// If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.
// If the input month is not in the range, the script jumps the defualt branch.

var readline=require("readline-sync");
var month=readline.question("enter the month_number  :")
var year=readline.question("enter the year  :")

switch (true){
    case month=="1" || month=="3"|| month=="5" || month=="7" || month=="8" || month=="10" || month=="12":
    console.log("there is 31 days")
    break;
    case month=="4" || month=="6" || month=="9" || month=="11":
        console.log("there is 30 days")
        break;
    case month=="2":
        if (year%4==0){
                console.log("this is leap year  therefore 29 days")
        }else{
            console.log("this is not leap year therefore 28 days")
        }
        }

