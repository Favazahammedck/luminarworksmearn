// //find second smallest array
// var array=[24,3,53,4,66,44,22]
// newarray=[]
// var i,j
// array.sort((i,j)=>i-j)
// console.log(`sorted array is:${array}`);
// console.log(array[1]);

//find second largest array
var array=[24,3,53,4,66,44,22]
newarray=[]
var i,j
array.sort((i,j)=>i-j)
console.log(`sorted array is:${array}`);
console.log(array[array.length-2]);
