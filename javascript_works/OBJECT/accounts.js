var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
  //print how many persons account details?

//   console.log(accounts.length);
//   print all account numbers whose ac-type is savings

// var findsavings=accounts.filter(saving=>saving.ac_type=="savings").forEach(data=>console.log(data.acno))
// console.log(findsavings);

// print balance of acno=1000

// var printbal=accounts.filter(data=>data.acno=="1000").forEach(bal=>console.log(bal.balance))
// let balance=accounts.find(data=>data.acno==1000).balance
// console.log(balance);

//print all googlepay transaction details

// printgpa=accounts.map(data=>data.transactions).flat().filter(trans=>trans.method=="g-pay").forEach(t=>console.log(t))


// print credit transactions of 1002

// pritnto=accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002).forEach(result=>console.log(result))

//print highest balance account details

// var highestbal=accounts.sort((data1,data2)=>data2.balance-data1.balance)[0]
// console.log(highestbal);


// print transaction history of 1002

var historyDedit=accounts.find(data=>data.acno==1002).transactions
// console.log(historyDedit);
var historyCredit=accounts.map(data=>data.transactions).flat().filter(debit=>debit.to==1002)
// console.log(historyCredit);
 //pushing to object 
var TransHistory={"Debit transaction":historyDedit,"Credit transaction":historyDedit}
console.log(TransHistory);








