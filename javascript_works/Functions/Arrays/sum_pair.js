
var array=[2,4,6]

var newarray=[]
//10,8,6
//[10,8,6]
var sum=array.reduce((n1,n2)=>n1+n2)

for(value of array){
   let result=sum-value 
   newarray.push(result)
    
}
console.log(newarray);


