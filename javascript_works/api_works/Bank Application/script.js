class Bank{
    createAccount(){ 
        let accountNumber=bk_acno.value
        let accoutType=bk_ac_type.value
        let personName=bk_pname.value
        let passWord=bk_pwd.value
        let balance=2000

        let account={
            accountNumber,
            accoutType,
            personName,
            passWord,
            balance
        }
        localStorage.setItem(account.accountNumber,JSON.stringify(account))
        alert("Account Created")

    }


}

var obj=new Bank()
