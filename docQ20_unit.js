// Write a python program to input electricity unit charges and calculate 
// total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

let electricity=require("readline-sync")
let unit=electricity.questionInt("enter the electricity unit  :")
if (unit<=50){
    var first=unit*0.50
    var total_bill1=first*(20/100)
    console.log(total_bill1+first)
}else if (unit>50 && unit<=150){
    var second=unit*0.75
    var total_bill2=second*(20/100)
    console.log(total_bill2+second)
}else if (unit>150 && unit<=250){
    var third=unit*1.20
    var total_bill3=third*(20/100)
    console.log(total_bill3+third)
}else if (unit>250){
    var forth=unit*1.50
    var total_bill4=forth*(20/100)
    console.log(total_bill4+forth)
}























// // let light_unit=require("readline-sync");
// // let unit=light_unit.questionInt("enter the unit :")
// // if (unit<=50){
// //     let count=unit*0.50;
// //     let total_bill=count*20/100;
// //     console.log("unit =",unit,"bill =",total_bill,"Rs")
// // }else if (unit >50 || unit<100){
// //     let count=unit*0.75;
// //     let total_bill=count*20/100;
// //     console.log("unit =",unit,"bill =",total_bill,"Rs")
// // }else if (unit>=250){
// //     let count=unit*1.50;
// //     let total_bill=count*20/100;
// //     console.log("unit =",unit,"bill =",total_bill,"Rs")
// // }

// let o={
//     a:"1",
//     b:"2"
// }
// if("c" in o===false){
//     o.c=3
// }
// console.log(o.c)
// console.log(o)
