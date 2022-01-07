var i,j,num=6;
let star=""
for(i=1;i<=num;i++){
    for(j=0;j<i;j++){
        star+="* "
    }
    star+="\n"
}
console.log(star);
