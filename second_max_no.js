let n=require("readline-sync")
let n1=n.questionInt("1st no  :")
let n2=n.questionInt("2nd no  :")
let n3=n.questionInt("3rd no  :")
if ((n1>n2 && n1<n3) || (n1<n2 && n1>n3)){
    console.log(n1,"n1 is sec max")
}else if ((n2>n3 && n2<n1) || (n2<n3 && n2>n1)){
    console.log(n2,"n2 is sec max")
}else{
    console.log(n3 ,"n3 sec max")
}