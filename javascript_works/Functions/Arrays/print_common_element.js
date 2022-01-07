// //find  common elements (more complex)

// var arr=[10,11,20,21]
// var newarr=[10,12,20,22]

// console.log("common numbers are: ");
// for(let value of arr){
//     for(let value2 of newarr){
//         if(value==value2){
//             console.log(`${value}`);
//         }


//     }
// }

// //print common element low complexity
var array1=[10,11,20,23]
var array2=[11,12,20,21]

let p1=0
let p2=0
console.log(`common element are:`);

while(p1<array1.length&&p2<array2.length){
    if(array1[p1]==array2[p2]){
        console.log(array1[p1]);
        p1++
        p2++
    }else if(array1[p1]>array2[p2]){
        p2++
    }else if(array1[p1]<array2[p2]){
        p1++
    }
}

