// // check the element is found in the array or not found
var array=[10,11,12,15,16]
var element=15
var flag=0
for(value of array){
    if(value==element){
        console.log(`element is found in the array`);
        flag++;
    }
}
if(flag==0){
    console.log('element not found in the array');
}



