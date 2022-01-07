// //program to find given number is prime or not
             //PRIME NUMBER 
// var number=5,i;
// var flag=0

//                                     //cant ecxecute from here-
// for(i=2;i<number;i++){ // i=2 2<5     and jumb to outer loop statms  =>  3<5            4<5         5<5 false
//     if(number%i==0){        // 5%2==0 !=                                     5%3==0 !=   5%4==0 != 
//     flag=1;
//     break;
// }
// }
// if(flag==0){
//     console.log(`prime number`);
// }
// else{
//     console.log(`Non prime`);
// }
//console.log(flag==0?"prime number":"Not a prime number");

                        //NOT A PRIME NUMBER
var number=6,i,flag=0
for(i=2;i<number;i++){ //i=2  2<6
    if(number%i==0){  //    5%2==0  not coming %=0 so break and go to out of loop and print else case
        flag=1
        break;
    }
}
// if(flag=0){
//     console.log(`prime num`);
// }
// else{
//     console.log(`non prime number`);
// }

console.log(flag==0?"prime number":"Not a prime number");
