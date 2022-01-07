var i,j,num=6;
let printstar=""

// for(i=1;i<=num;i++){
//     for(j=0;j<=i;j++){
//         printstar+="* "
//     }
//     printstar+="\n"
// }





for(i=1;i<=num;i++){
    for(j=6;j>=i;j--){
        printstar+="* "
    }
    printstar+="\n"
}
console.log(printstar);



