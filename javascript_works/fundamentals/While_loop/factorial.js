var starting=1,ending=4,factorial=1;
while(starting<=ending){     //printed 1-4
    factorial=factorial*starting;    //factorial=1*1=1     factorial=1*2=2      factorial=2*3=6       factorial=6*4=24
    // factorial*=starting;
    starting++;          //                   1                   2                 3                       4           5=>false out of loop
}
console.log(`factorial result:    ${factorial}`);