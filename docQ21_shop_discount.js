// A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000. 
// Ask the user for quantity, Suppose, one unit will cost 100. Judge and print total cost for 
// user.

let shop=require("readline-sync")
let items=shop.questionInt("enter the items :")
let prise =shop.questionInt("enter the prise :")
let total_prise=items*prise
if (total_prise>=1000){
    let discount=total_prise*10/100
    let purches_prise=total_prise-discount
    console.log("purches_prise :",purches_prise,"discount :",discount)
}else{
    console.log(total_prise,"no discount")
}