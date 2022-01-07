var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone"},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},

}

// print 1003 name
// console.log(users[1003].personName);
// 1005 exist or not
// console.log("1005" in users);
// print balance of 1002
// console.log(users[1002].balance);


// Password autheintication

function auth(ac_No,pwd) {
    if(ac_No in users){
        let pass=users[ac_No].password
        if(pass==pwd){
            // console.log("password success");
            return 1

        }else{
            // console.log("wrong password");
            return -1
        }

    }else{
        // console.log("Invalid account number");
        return 0
    }
    
}
// console.log(auth("1002","userthree"));
//                      CHECK ACCOUNT NUMBER EXIST OR NOT
function checkAcNoExistOrNot(accountNO) {
    return accountNO in users?true:false
    
}

//                  FUND TRANSFER

function fundTrans(from_acNo,to_acNo,amount) {
    if(checkAcNoExistOrNot[from_acNo]&&checkAcNoExistOrNot[to_acNo]){
        let OldBal=users[from_acNo].balance
        if(amount>OldBal){
            console.log("Insufficent Balance");
        }else{
            // initiate fund transfer [from ac debit, to ac credit ]
            users[from_acNo].balance-=amount
            let Availbal_from_ac_No=balanceEnq(from_acNo)
            console.log(`your account number ${from_acNo} has been debited ${amount} ,availabel balance ${Availbal_from_ac_No} `);
            users[to_acNo].balance+=amount
            let Availbal_to_ac_No=balanceEnq(to_acNo)
            console.log(`your account number ${to_acNo} has been credited ${amount} ,available balance ${Availbal_to_ac_No}`);
        }

    }else{
        console.log("Invalid Account Number");
    }
    
}



//                              BALANCE ENQUIRY

function balanceEnq(acno) {
    if(checkAcNoExistOrNot(acno)){
        console.log(users[acno].balance);
        return users[acno].balance

    }else{
        console.log("Invalaid account Number");
        return (`Invallid account number`)
    }
    
}
console.log(balanceEnq("1003"));

consolfundTrans(1000,1001,4000);