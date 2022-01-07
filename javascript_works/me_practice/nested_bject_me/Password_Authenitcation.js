var AcHolder={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone"},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},

}

// AUTHENTICATE PASSWORD

function authenticatepwd(acNumber,pswd) {
    if(acNumber in AcHolder){
        let pass=AcHolder[acNumber].password
        if(pass==pswd){
            console.log("success");
        }else{
            console.log("Not sucess");
        }

    }else{
        console.log("Invalid Account number");
    }
    
}
console.log(authenticatepwd("1000","userone"));
