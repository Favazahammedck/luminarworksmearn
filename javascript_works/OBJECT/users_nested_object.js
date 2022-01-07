var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",trasactions:[{creditTransactions:[]},{debitTransactions:[]}]},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",trasactions:[{creditTransactions:[]},{debitTransactions:[]}]},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",trasactions:[{creditTransactions:[]},{debitTransactions:[]}]},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",trasactions:[{creditTransactions:[]},{debitTransactions:[]}]},

}

//print 1003 name
// console.log(users[1003].personName);
// 1005 exist or not
// console.log("1005" in users);

// //print balanceof 1001
// console.log(users[1001].balance);
//          PASSWORD AUTHENTICATION

function authenticate(ac_no,password) {
    if(ac_no in users){
        let pwd=users[ac_no].password
        if(pwd==password){
            return 1
            // console.log("Access granded");
        }else{
            return -1
            // console.log("worng password");
        }

    }else{
        return 0
        // console.log("invalid account number");
    }
    
}
// console.log(authenticate(1000,"userone"));




//                      FUND TRANSFER     
function CheckAccountNoExistorNot(accountNumber) {
    return accountNumber in users?true:false
    
}

function fundTransfer(from_acNo,to_acNo,amount) {
    if(CheckAccountNoExistorNot(from_acNo)&&CheckAccountNoExistorNot(to_acNo)){
        let OldBalance=users[from_acNo].balance
        if(amount>OldBalance){
            console.log("Insufficent Balance");

        }else{
             users[from_acNo].balance-=amount
             let from_acNo_balance=balanceEnquiry(from_acNo)
             console.log(`your acNo ${from_acNo} account has been debited with ${amount} and the current balance is ${from_acNo_balance}`);
             users[to_acNo].balance+=amount
             let to_acNo_balance=balanceEnquiry(to_acNo)
             console.log(`your acNo ${to_acNo} account has been creited with ${amount} and the current balance is ${to_acNo_balance}`);
             

            let crTrans={from:from_acNo,amount:amount}
            let dtTrans={to:to_acNo,amount:amount}
            users[from_acNo].trasactions[1].debitTransactions.push(dtTrans)
            users[to_acNo].trasactions[0].creditTransactions.push(crTrans)
            console.log(users[to_acNo].trasactions[0]);
            console.log(users[from_acNo].trasactions[1]);

    }

    }else{
        console.log("Invalid Account No!");
    }
    
}                 

// console.log(fundTransfer("1002","1003","2500"));

///                             BALANCE ENQUIRY


function balanceEnquiry(aCCno) {
    if(aCCno in users){
// console.log(users[aCCno].balance);
return users[aCCno].balance

    }else{
        console.log("Invalid Account Number");
    }
    
}
// console.log(balanceEnquiry(1003));

fundTransfer(1000,1001,2000);




    

