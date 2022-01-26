


let readlinesyn=require("readline-sync");
var card=readlinesyn.question("enter the card :")
if (card=="ATM_card"){
    console.log("in proceess")
    var language=readlinesyn.question("enter the language :")
    if (language=="english" || language=="hindi" || language=="marathi"){
        console.log("in process")
        var pin=readlinesyn.question("enter the pin :")
        if (pin=="1234"){
            console.log("pin is correct")
            var account=readlinesyn.question("enter the account type :")
            if (account=="saving"){
                console.log("correct")
                var transaction=readlinesyn.question("enter the transaction type :")
                if (transaction=="cash withdrawal"){
                    console.log("transaction is procceed")
                    var amount=readlinesyn.question("enter the amount :")
                    if (amount<=10000){
                        console.log("wait and collect cash")
                        var receipt=readlinesyn.question("enter the receipt :")
                        if (receipt=="yes"){
                            console.log("get receipt")
                            console.log("thank you ")
                        }
                        else{
                            console.log("invalid")
                        }
                    }else{
                        console.log("enter the correct amount")
                    }
                }else{
                    console.log("transaction is do not process")
                }
            
            }else{
                console.log("no")
            }
        }else{
            console.log("pin is wrong")
        }
    }else{
        console.log("enter the correct language")
    }
}else{
    console.log("pan _card")
}
            
        
    

