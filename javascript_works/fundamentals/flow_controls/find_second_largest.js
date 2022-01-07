var num1=19,num2=234,num3=30;
if((num1>num2)&&(num1>num3)){
    if(num2>num3){
        console.log(`second largest number is ${num2}`);
    }
    else{
        console.log(`second largest number is ${num3}`);
    }
}
else if((num2>num1)&&(num2>num3)){
    if(num1>num3){
        console.log(`second largest number is ${num1}`);
    }
    else{
        console.log(`second largest number is ${num3}`);

    }

}
else if((num3>num1)&&(num3>num2)){
    if(num1>num2){
        console.log(`second largest number is ${num1}`);

    }
    else{
        console.log(`second largest number is ${num2}`);


    }
}
else{
    console.log(`All numbers are eaqual`);
}










