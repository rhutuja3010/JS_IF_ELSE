let user=require("readline-sync")
let n=user.question("enter the no :")
let a=n.length-2;
let b=Number(Math.floor(n/10)**a)
let c=b%10
if (c==3){
    console.log("yes")
}else{
    console.log("no")
}