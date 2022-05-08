

string="come"
if (string.endsWith("ing")){
    v=string.replace("ing","ly")
    console.log(v)
}else if(string.endsWith("ly")){
    v1=string.replace("ly","ing")
    console.log(v1)
}
else{
    string+="lying"
    console.log(string)
}   