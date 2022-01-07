var number=4,i=1,sum=0;
for(i=1;i<=number;i++){  //  1<=4<                2<=4                    3<=4          4<=4                5<=4 false &out of loop        
    sum=sum+i           //sum=0+1 =1 sum=>1     sum=1+2=3 sum=>3    sum=3+3=6 sum=>6  sum=6+4=6 sum=>10
}
console.log(sum);

