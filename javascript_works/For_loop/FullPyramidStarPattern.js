let number=6;
let string=""
for(i=1;i<=number;i++){
    for(j=1;j<=number-i;j++){
        string+=" "
    }
    for(k=1;k<=i;k++){
        string+="* "
    }
    string+="\n"
}
console.log(string);