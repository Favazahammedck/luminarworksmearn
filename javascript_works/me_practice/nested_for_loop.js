var i,j;
for(i=1;i<=3;i++){                //1<3                   2<=3               3<=3    4<=3 false -end goto out of two loop.
    for(j=1;j<=3;j++){           //1<=3    2<=3    3<=3    4<3 false   1<=3   2<=3     3<=3   4<=3 false    1<=3  2<=3  3<=3   4<=3  false
        console.log(`${i},${j}`);// 1,1    1,2      1,3              2,1        2,2     2,3                 3,1    3,2  3,3
    }
}