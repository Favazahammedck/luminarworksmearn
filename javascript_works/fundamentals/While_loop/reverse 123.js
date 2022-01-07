//  var=123
//  var=321

var num=123,result="";
while(num !=0){        //              123!=0             12!=0             1!=0                    0.1!=0 false(go to out of while) 
    let last_digit=num%10;  //        123%10= 3          12%10=2            1%10=1
    result+=last_digit;     // ""       +"3"              +"2"               +"1"
    num=Math.floor(num/10)  //  123/10=12.3 floor to=>12             12/10=1.2 floor=1            1/10=0.1 floor=0
}
console.log(result);

