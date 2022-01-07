var row,space,col;

for(row=1;row<=10;row++){
    let string=""
    for(space=1;space<=(10-row);space++){
        string+=" "

    }
    for(col=1;col<=row;col++){
        string+="* "
    }
    console.log(string);
}
