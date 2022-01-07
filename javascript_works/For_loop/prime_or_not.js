var num=7,flag=0;
for(let i=2;i<num;i++){         //i=2 2<=7
if(num %i==0){                 // 7%2==0      
    flag=1
    break;
}
}
// if(flag==0){
//     console.log(`prime number`);
// }
// else{
//     console.log(`Not Prime number`);
// }
console.log(flag==0?"prime number":"Not prime")