class Bank{
    createAccount(){
        let accountNum=bk_acno.value
        let acType=bk_ac_type.value
        let balance=2000
        let pname=bk_pname.value
        let pwd=bk_pwd.value         

        let account={accountNum,acType,balance,pname,pwd}
        localStorage.setItem(account.accountNum,JSON.stringify(account))
alert("accoutn Created")
    }
    

}




let bank=new Bank()