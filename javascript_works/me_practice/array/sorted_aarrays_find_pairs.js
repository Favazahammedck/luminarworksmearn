var array=[2,3,4,5]
element=40
flag=0
var lower=0,upper=array.length-1
while(lower<upper){//
    let current_sum=array[lower]+array[upper]//7
    // case 1
    if(element==current_sum){//7==6
        console.log(`pairs are :${array[lower]},${array[upper]}`);
        flag=1
        break

    }
    //case 2
    else if(current_sum<element){//7<6
        lower+=1
    }
    //case 4
    else if(current_sum>element){//7>6
        upper-=1
    }
    

    
}
if(flag==0){
    console.log(`pair not found`);
}
