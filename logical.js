const s = require('readline-sync')
let str = s.question("enter the name ")
if (str.includes("ing")) {
    console.log(str.replace("ing", "ly"))
} else if (str.includes("ly")) {
    console.log(str.replace("ly", "ing"))
} else {
    console.log(str+'lying')
}

// function math() {
//     if (4 > 2) {
//         let name1 = "Rhutuja"
//     }
//     console.log(name1)
// }
// math()