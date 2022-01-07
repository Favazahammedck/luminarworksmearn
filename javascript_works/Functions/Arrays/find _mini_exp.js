let expenses=[20000,25000,30000,35000,35000]
var minimum_exp=expenses[0]
for(let amount of expenses){
    if(amount<minimum_exp){
        minimum_exp=amount 
    }


}

console.log(minimum_exp);