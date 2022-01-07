class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
    session={}//        {"user":1000}
    validateAccountNumber(acno){
        return acno in this.accounts?true:false

    }
    //authenticateUser(1000,"userone")
    authenticateUser(acno,password){
        if(this.validateAccountNumber(acno)){
            let pwd=this.accounts[acno].password
            if(password==pwd){
                console.log("Acccess Granded");
                //if authentication success, add account number in the session{}
                this.session["user"]=acno

            }else{
                console.log("Invalid Password");
            }

        }else{
            console.log("Invalid Account Number");
        }

    }
    getBalance(acno){
        return this.accounts[acno].balance

    }
    balanceEnq(){
        if("user" in this.session){
            let loggedUser=this.session["user"]
            console.log( this.getBalance(loggedUser));
        }else{
            console.log("Invalid Session,You must logged in");
        }
    }
    loginRequired(){
        return "user" in this.session?true:false
    }
    fundTransfer(to_acno,amount){
        if(this.loginRequired()){
            let loggedUser=this.session["user"]
            if(this.validateAccountNumber(to_acno)){
                let currentBalance=this.getBalance(loggedUser)
                if(amount>currentBalance){
                    console.log("Insufficeint balance");
                }
                else{
                    console.log("transactions completed");
                }
    
            }else{
                console.log("Invalid account number");
            }
        }else{
            console.log("Invalid session,You must login");
        }

    }
    getDebitTransaction(){

    }
    getcreditTransaction(){

    }
    getTransactionHistory(){

    }
    
}

var bank=new Bank()
// console.log(bank.validateAccountNumber(1000)); 
bank.authenticateUser(1001,"usertwo")
bank.balanceEnq()