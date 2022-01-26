// Write a python program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F



let sub=require("readline-sync");
let physics=sub.questionInt("enter the marks of physics :")
let chemistry=sub.questionInt("enter the marks of chemistry :")
let biology=sub.questionInt("enter the marks of biology :")
let maths=sub.questionInt("enter the marks of maths :")
let computer=sub.questionInt("enter the marks of computer :")
let total_marks=physics+chemistry+biology+maths+computer
let percentage=total_marks/500*100

if (percentage>=90){
    console.log(percentage,"Grade A")
}else if (percentage>=80){
    console.log(percentage,"Grade B")
}else if (percentage>=70){
    console.log(percentage,"Grade C")
}else if (percentage>=60){
    console.log(percentage,"Grade D")
}else if (percentage>=40){
    console.log(percentage,"Grade E")
}else if (percentage<40){
    console.log(percentage,"Grade f")
}