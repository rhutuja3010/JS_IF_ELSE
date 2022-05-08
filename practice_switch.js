// let day = "friday";
// switch (day) {
//     case "monday":
//         console.log("poha")
//         break;
//     case "tuesday":
//         console.log("maggi")
//         break;
//     case "wensday":
//         console.log("sabudana")
//     default:
//         console.log("bhel")

// }

// let city_name = "mumbai"
// switch (city_name) {
//     case "mumbai":
//         console.log("Sea")
//         break
//     case "Delhi":
//         console.log("Red fort")
//         break
//     case "agra":
//         console.log("Tajmahal")
// }




// let number = -9
// switch (true) {
//     case number >= 0:
//         console.log("positive number")
//         break
//     case number <= 0:
//         console.log("negative number")
//         break
//     case number == 0:
//         console.log("zero")
//         break
//     default:
//         console.log("not a number")

// }




let m = require("readline-sync")
let month = m.question("enter the month :")
let date = m.questionInt("enter the date : ")
switch (month) {
    case "feb":
        switch (date) {
            case 14:
                console.log("valentine day")
                break
            case 15:
                console.log("Rose Day")
                break
            case 16:
                console.log("chocolate day")
                break
            default:
                console.log("normal day")
        }

}