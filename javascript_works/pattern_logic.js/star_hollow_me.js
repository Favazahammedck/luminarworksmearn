// var number=7
// var row;
// var space;
// var col;

// for(row=1;row<=number;row++){//4
//     let string=""
//     for(space=1;space<=number-row;space++){//space=1 1<=4-1 2<=4-1 3<=4-1 4<=4-1 1<=4-2 2<=4-2 3<=4-2 1<=4-3 2<=4-3
//         string+=" "
//     }for(col=1;col<=row;col++){//1<=1 1<=2 2<=2 1<=3 2<=3 3<=3
//         string+="* "
//     }
//     console.log(string);
// }
var number=10
var row;
var space;
var col;
for(row=1;row<=number;row++){
    let star=""
    for(space=1;space<=number-row;space++){
        star+=" "
    }
    for(col=1;col<=row;col++){
        star+="* "
    }
    console.log(star);
}
