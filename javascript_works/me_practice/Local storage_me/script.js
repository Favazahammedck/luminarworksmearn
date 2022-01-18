// local storage
// key , value

// localStorage.setItem("Token","123")
// localStorage.setItem("username","abc")
// localStorage.setItem("password","abc123")
// const authToken=localStorage.getItem("Token")
// console.log(authToken);
// var pwd=localStorage.getItem("password")
// console.log(pwd);


// var employee={
//     Eid:1001,
//     Ename:"Arif",
//     dept:"developer",
//     salary:25888
// }

// localStorage.setItem(employee.Eid,JSON.stringify(employee))


var account={
    accno:1002,
    personName:"Arif",
    actype:"savings",
    balance:5000,
    password:"abc123"
}

// localStorage.setItem(account.accno,JSON.stringify(account))
// localStorage.getItem(1001)

// var details=JSON.parse(localStorage.getItem(1001)) 
// console.log(details.balance);

// var details=JSON.parse(localStorage.getItem(1002))
// console.log(details.accno,details.password);

// var typeandbal=JSON.parse(localStorage.getItem(1002))
// console.log(typeandbal.actype,typeandbal.balance);

console.log(1000 in localStorage);
