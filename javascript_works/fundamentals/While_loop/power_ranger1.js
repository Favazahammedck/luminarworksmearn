//var num=2
// 2+22=24

//var=3
//  3+33+333=369
//var=4
// 4+44+444+4444=4936



var number=4,i=1,sum=0;
let result=""

while(i<=number){           // 1<=4             2<=4              3<=4                      4<=4                5<4 false-out of while loop
    result=result+number    // ""+4 res="4"     "4"+4 res= "44"   "44"+4  res="444"       "444"+4  res="4444"
    // result+=number
    sum=sum+Number(result)
    // console.log(result);    //  "4"             "4"4              "444"                    "4444"
    i++
}
console.log(`sum of double num series : ${sum}`);