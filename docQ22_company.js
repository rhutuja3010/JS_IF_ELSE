// A company decided to give a bonus of 5% to an employee if his/her year of service is more
// than 5 years. Ask users for their salary and year of service and print the net bonus amount.

let employee =require("readline-sync")
let year=employee.questionInt("how many year you spend in company :")
let salary=employee.questionInt("enter the salary :")
if (year>=5){
    let bonus=salary*5/100
    let total_bonus=salary+bonus
    console.log("tatal_bonus :",total_bonus,"bonus :",bonus)
}else{
    console.log(salary,"dont get bonus")
}