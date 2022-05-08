// Write a program to accept the cost price of a bike and display the road 
// tax to be paid according to the following criteria :
// a.                  b.           c.                      d.
// Cost price (in Rs)   >100000     >50000 and <=100000     <=50000

let t=require("readline-sync")
let tax=t.questionInt("enter the prise :")
if (tax>100000){
    let x=15/100*tax
    console.log("15% tax",x)
}else if (tax>50000 && tax<=100000 ){
    let x=15/100*tax
    console.log("10% tax",x)
}else if (tax<=50000){
    let x=5/100*tax
    console.log("5% tax",x)
}