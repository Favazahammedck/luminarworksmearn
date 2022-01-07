// var array=[6,8,5,9,10,12,2]
// array.sort((n1,n2)=>n1-n2)
// var element=3
// var low=0
// var upper=array.length-1
// var flag=0


// while(low<upper){
//     let mid=Math.floor((low+upper)/2)
// //case 1
// if(element==array[mid]){
//     flag=1
//     break
// }
// //case 2
// else if(element>array[mid]){
// low=mid+1
// }
// //case 3
// else if(element<array[mid]){
// upper=mid-1
// }
// }
// console.log(flag==0?"element is not  found":"found");

var array=[2,5,6,8,9,10,12]
searching_element=12
var lower=0,upper=array.length-1
flag=0

while(lower<upper){//0<6  4<6
    let mid=Math.floor((lower+upper)/2)//mid=0+6/2=3  mid=4+6/2=5
    //case 1
    if(searching_element==mid[array])//10==6 10==10
{
    flag=1
    break

}
//case 2
else if(searching_element>array[mid])//10>6
{
    lower=mid+1

}
//case 3
else if(searching_element<array[mid]){
    upper=mid-1
}
}
console.log(flag==0?"not found":"found");


