var array=[2,4,6,5]
sum=0
var newarray=[]
for(value of array){
    sum=sum+value
    // console.log(sum);
}
for(value of array){
    newarray.push(sum-value)
}
console.log(newarray);
