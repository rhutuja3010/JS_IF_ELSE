// A student will not be allowed to sit in an exam if his/her attendance is less than 75%.
// Take following input from the user. Number of classes held. Number of classes attended. And print, percentage of class attended. Is the student is allowed to sit in the exam or not.
var a=require("readline-sync")
var b=a.question("enter the presenty percentage :")
if (b>=75){
    console.log("studend will be attend class")

}else{
    console.log("do not attend class")
}