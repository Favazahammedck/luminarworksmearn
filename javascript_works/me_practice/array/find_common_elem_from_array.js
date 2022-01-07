// //find common elements from two array
// var array1=[10,11,20,21]
// var array2=[11,12,20,21]
//      console.log(`common elements are:`);
// for(value1 of array1){
//     for(value2 of array2){
//         if(value1==value2){
//             console.log(`${value1}`);
//         }
//     }
// }

//search element exist in the array or not

var array=[10,11,12,15,16]
element=11
flag=0

for(value of array){
    if(value==element){
        console.log(`Element is found in the array`);
        flag=1
    }
}
if(flag==0){
    console.log(`Element is Not found in the array`);


}
