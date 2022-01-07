// var users={
//     1000:{accno:1000,personName:"ram",balance:5000,password:"userone",trasactions:[{creditTransactions:[]},
//     {debitTransactions:[]}]},

//     1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",trasactions:[{creditTransactions:[]},
//     {debitTransactions:[]}]},

//     1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",trasactions:[{creditTransactions:[]},
//     {debitTransactions:[]}]},

//     1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",trasactions:[{creditTransactions:[]},
//     {debitTransactions:[]}]},

// }


// function authenticate(accountNO,pwd) {
//     if(accountNO in users){
//         let passwo=users[accountNO].password
//         if(passwo==pwd){
//             // console.log("password success");
//             return 1
//         }else{
//             // console.log("wrong password");
//             return -1
//         }

//     }else{
//         // console.log("Invalid account number");
//         return 0
//     }
    
// }
// // console.log(authenticate(1001,"usertwo"));


// function validateAcNo(ACCNO) {
//     return ACCNO in users?true:false
    
// }
// function fundTransfer(from_ACNO,to_ACNO,amount) {
//     if(validateAcNo(from_ACNO)&&validateAcNo(to_ACNO)){
//         oldBalance=users[from_ACNO].balance
//         if(amount>oldBalance){
//             console.log("Insuffiecent blance");
//         }else{

//             users[from_ACNO].balance-=amount
//             let AvailFromAcno=balanceEnq(from_ACNO)
//             console.log(`Your account number "${from_ACNO}" has been debited of rupees ${amount},Final balance is ${AvailFromAcno} `);

//             users[to_ACNO].balance+=amount
//             let AvailToAcno=balanceEnq(to_ACNO)
//             console.log(`Your account number "${to_ACNO}" has been credited of rupees ${amount},Final balance is ${AvailToAcno} `);

//             let crTrans={from:from_ACNO,amount:amount}

//             let dtTrans={To:to_ACNO,amount:amount}
//             users[from_ACNO].trasactions[1].debitTransactions.push(dtTrans)
//             users[to_ACNO].trasactions[0].creditTransactions.push(crTrans)

//             console.log(users[to_ACNO].transaction)
//             console.log(users[from_ACNO].trasactions);



//         }

//     }else{
//         console.log("Invalid Account Number");
//     }

        

//     }


// //                  BALANCE ENQUIERY
//     function balanceEnq(ac_Number){
//         if(validateAcNo(ac_Number)){
//            return users[ac_Number].balance
//         }else{
//             console.log("Invalid Ac Number");
//         }

//     }

// console.log(balanceEnq(1003));

// fundTransfer(1001,1003,3000)




// //print 1000 accno account details
// // console.log(users[1000]);
// //print 1002 blance
// // console.log(users[1002].balance);
// //print 1003 name
// // console.log(users[1003].personName);
// // 1006 exist or not
// // console.log("1006" in users);
// // 1004 accno exist or not
// // console.log("1004"in users[1004].accno);
// //print 1002 accno
// // console.log(users[1002].accno);

















