// var array=[2,3,4,5,6]
// element=7
// flag=0

// for(let i of array){    //2                                    
//     for(let j of array){// 2       3        4            5     
//         if(i+j==element){//2+2==7  2+3==7   2+4==7     2+5==7  
//             console.log(`pair of array is:${i},${j}`); // 2,5
//             flag=1
            
//         }
// }
// break

// }
// if(flag==0){
//     console.log(`pair is not found`);

// }
            // another method
var array=[2,3,4,5,6]
element=15
var lower=0
var upper=array.length-1
flag=0
while(lower<upper){
    let current_sum=array[lower]+array[upper]
    //case-1
    if(current_sum==element){
        console.log(`pairs are:${array[lower]},${array[upper]}`);
        flag=1
        break
    }
    // case-2
    else if(current_sum<element){
        lower+=1
    }
    else if(current_sum>element){
        upper-=1
    }

    
}
if(flag==0){
    console.log(`pair not found`);
}