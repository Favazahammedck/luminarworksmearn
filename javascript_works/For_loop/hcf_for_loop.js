var number1=12,number2=24,Factor=0
for(let i=1;i<=number2;i++){
    if((number1%i==0) && (number2%i==0)){
        Factor=i
        console.log(Factor);
    }
}
console.log(`factor: ${Factor}`);