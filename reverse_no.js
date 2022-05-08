let n=require("readline-sync")
let no=n.questionInt("enter the no :")
let n1=(no%10);
let n2=Math.floor(no/10)%10
let n3=Math.floor(no/100)%10
let rev=(n1*100+n2*10+n3*1)
if (no<=1000){
    console.log(rev)
}else{
    console.log("no")
}