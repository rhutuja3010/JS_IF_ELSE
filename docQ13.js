// Write a python program to count the total number of notes in a given amount.

let readlineSync=require("readline-sync");
var amount = readlineSync.questionInt("enter the amount :")
if (amount>=10 || amount<=20){
    console.log("note of 10 rupees :", Math.floor(amount/10))
}
    if (amount>=20 || amount<=50){
        console.log("note of 20 rupees :",Math.floor(amount/20))
    }
        if (amount>=50 || amount<=100){
            console.log("note of 50 rupees :",Math.floor(amount/50))
        }
            if (amount>=100 || amount<=200){
                console.log("note of 100 rupees :",Math.floor(amount/100))
            }
                if (amount>=200 || amount<=500){
                    console.log("note of 200 rupees :",Math.floor(amount/200))
                }
                    if (amount>=500 || amount<=1000){
                        console.log("note of 500 rupees :",Math.floor(amount/500))
                    }
                        if (amount>=1000 || amount<=2000){
                            console.log("note of 1000 rupees :",Math.floor(amount/1000))
                        }
                            if (amount>=2000){
                                console.log("note of 2000 rupees :",Math.floor(amount/2000))
                            }
                            


// let a=5;
// let b=2;
// console.log(Math.floor(a/b))