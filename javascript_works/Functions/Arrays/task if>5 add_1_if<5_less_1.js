// var arr=[9,6,7,8,3,2]

// for(let amount of arr){
//     let result = amount>5?amount+1:amount-1
//     console.log(result);
//     // if(amount>5){         
//     //     amount=amount+1
//     //     console.log(amount);
        
//     // }   
//     // else{
//     //     amount=amount-1
//     //     console.log(amount);
//     // }
//     }

var arr=[9,6,7,8,3,2]
var newarr=[]
for(let amount of arr){
    // if(amount>5){
    //     result.push(amount+1)
    // }else{
    //     result.push(amount-1)
        
    // }
    amount>5?newarr.push(amount+1):newarr.push(amount-1)

}
console.log(newarr);

    




