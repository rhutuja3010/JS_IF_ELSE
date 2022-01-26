// Write a python program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%


let salary=require("readline-sync");
let basic_salary=salary.questionInt("enter the salary :")
if (basic_salary<=10000){
    var HRA=Math.floor(basic_salary*20/100)
    var DA=Math.floor(basic_salary*80/100)
    console.log("gross_salary :",basic_salary+HRA+DA)
}else if (basic_salary<=20000){
    var HRA=Math.floor(basic_salary*25/100)
    var DA=Math.floor(basic_salary*90/100)
    console.log("gross_salary :",basic_salary+HRA+DA)
}else {
    var HRA=Math.floor(basic_salary*30/100)
    var DA=Math.floor(basic_salary*95/100)
    console.log("gross_salary :",basic_salary+HRA+DA)
}
