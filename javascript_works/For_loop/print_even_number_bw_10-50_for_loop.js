var low_limit=10,upp_limit=16,increment;
for(low_limit;low_limit<=upp_limit;low_limit++){ //10<=16            11<=16               12<=16        13<16          ....
    if(low_limit%2==0){                        // 10%2==0 =0        11%2==0  !=0         12%2==0 =0    13%2==0 !=0       ....
        console.log(low_limit);               //    10           out of loop !print         12       out of loop !print ....
    }
}