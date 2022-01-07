let rows,cols,space,number=5
for(rows=1;rows<=number;rows++){
    let star=""
    for(space=1;space<=(number-rows);space++){
        console.log("  ");
    }
    for(cols=1;cols<=rows;cols++){
        star+="*  "
    }
    console.log(star);
}