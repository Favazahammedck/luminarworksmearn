let i,j,number=4;
for(let i=1;i<=number;i++){ //i=1 1<=4              i=2 2<=4                  i=3 3<=4              i=4 4<=4            i=5              5<4 fls go to out of loop
    let string=""          //  ""                      ""                         ""                    ""
    for(let j=1;j<=i;j++){ // j=1 1<=1 j=2 2<=1 fls  j=1 1<=2 j=2 2<=2 3<=2 fls  j=1 1<=3 2<=3 3<=3 j=1 1<=4      /2<=4                                                                       3<=4  4<=4 4<=5 fls
        string+="* "      // *
                          // *  *
                          // *  *  *
                          // *  *  *  *
                    
            
    }
    console.log(string);
}


// 