class Bank {
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
    session = {}
    validateAccountNumber(acno) {
        return acno in this.accounts ? true : false

    }
    authenticate(acno, password) {
        if (this.validateAccountNumber(acno)) {
            let pwd = this.accounts[acno].password
            if (password == pwd) {
                console.log("Access granded");
                this.session["user"] = acno

            } else {
                console.log("Invalid password");
            }
        } else {
            console.log("Invalid Account Number");
        }

    }
    getbalance(acno) {
        return this.accounts[acno].balance

    }
    balanceEnq() {
        if ("user" in this.session) {
            let loggedUser = this.session["user"]
            console.log(this.getbalance(loggedUser));


        } else {
            console.log("Invalid session You must logged in");
        }
    }
    loginRequired() {
        return "user" in this.session ? true : false
    }
    loggedUser(){
        if(this.loginRequired){
            return this.session["user"]
        }

    }
    fundTransfer(to_acno, amount) {
        if (this.loginRequired) {
            let loggedUser = this.session["user"]
            if (this.validateAccountNumber(to_acno)) {
                let currentBalance = this.getbalance(loggedUser)
                if (amount > currentBalance) {
                    console.log("Insufficient balance");
                } else {
                    let creditTransactions = { fromAccocunt: this.session["user"], amount: amount }
                    console.log(`account number ${this.session["user"]} is debited amount of ${amount},Final balnce is  `);
                    let debitTransactions = { to_acno: to_acno, amount: amount }
                    console.log(`account number ${to_acno} is credited amount of ${amount},Final balnce is `);


                    console.log("transaction completed");
                }


            } else {
                console.log("Invalid Account Number");
            }

        } else {
            console.log("Invalid session you must logged in");
        }

    }
    getDebitTransaction() {
        let user=this.loggedUser()
        this.accounts[user].transactions.debitTransactions.array.forEach(t=>console.log(t))
    }
    getCreditTransaction() {
        let user=this.loggedUser()

        this.accounts[user].transactions.debitTransactions.array.forEach(t=>console.log(t))


    }
    getTrannsactionHistory() {

    }

}


var bank = new Bank()
bank.authenticate(1000, "userone")
bank.balanceEnq()
bank.fundTransfer(1001, 3000)
