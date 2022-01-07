number=7

for(let i=1;i<=number;i++){
    let star=""
    for(let space=1;space<=number-i;space++){
        star+=" "
    }
    for(let j=1;j<=i;j++){
        star+="* "
    }
    console.log(star);
}