var arr=[2,3,4,5]
var sum=8
var flag=0

for(let num of arr){//2

for(let num2 of arr){
    if((num+num2)==sum){
        console.log(`pairs:${num},${num2}`);
        flag=1

    }
    break

}
if(flag==0){
    console.log(`pair not found`);
}
}
