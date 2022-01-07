var firstarray=[3,4,5,5,6]
// o/p [9,8,7]
var newarray=[]
var sum=firstarray.reduce((i,j)=>i+j)
for(value of firstarray){
    let result=sum-value
    newarray.push(result)
}
console.log(newarray);