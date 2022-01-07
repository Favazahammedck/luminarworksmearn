// prime or not 
var num=10,i,flag=0;
for(i=2;i<num/2;i++){
    if(num%i==0){
        flag=1;
        break;
    }
}
if(flag==0){
    console.log("prime number");
}
else{
    console.log("not prime number");
}