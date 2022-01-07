var arr=[2,3,4,5]
var element=6
var lower=0
flag=0
var upper=arr.length-1
while(lower<upper){
    let curent_sum=arr[lower]+arr[upper]
    if(element==curent_sum){
        console.log(`pairs are:${arr[lower]},${arr[upper]}`);
        
        flag++
        break
    }
    else if(curent_sum<element){
        lower+=1
    }
    else if(curent_sum>element){
        upper-=1
    }

}
if(flag==0){
    console.log(`no pair found`);
}

