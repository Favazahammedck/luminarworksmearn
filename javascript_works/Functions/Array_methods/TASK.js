var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]
// q1 higest test + ve case district

// highestTestpos=coivd_data.reduce((district1,district2)=>district1[2]>district2[2]?district1:district2)
// console.log(highestTestpos);

// q2 district with higest 1 dose vaccination rate
// highfirstdosedis=coivd_data.reduce((first1,first2)=>first1[5]>first2[5]?first1:first2)[5]
// console.log(highfirstdosedis);

// q3 district with lowest death cases

// lowestdeathcase=coivd_data.reduce((death1,death2)=>death1[3]<death2[3]?death1:death2)
// console.log(lowestdeathcase);

// q4 sort district with +ve cases

// sortpositive=coivd_data.sort((pos1,pos2)=>pos1[2]-pos2[2])
// console.log(sortpositive);

// q5 sort the districts based on 1st dose %
// sortfirstdoseperc=coivd_data.sort((first1,first2)=>first2[5]-first1[5])
// console.log(sortfirstdoseperc);


// q6 is there any states with +ve cases > 60000
// gtpos=coivd_data.some((gt)=>gt[2]>60000)
// console.log(gtpos);

// q7 print trissur details
// detailoftsr=coivd_data.find((avail)=>avail[1]=="thrissur")
// console.log(detailoftsr);

// q8 total number of +ve cases
totalpos=coivd_data.map((total)=>total[2]) .reduce((total1,total2)=>total1+total2)
console.log(totalpos);

// q9 total number of cured cases
// totalcured=coivd_data.reduce((total1,total2)=>total1[4]+total2[4])
// console.log(totalcured);

// q10 cured numbers of iduky
// curediduky=coivd_data.find((cured)=>cured[1]=="iduky"&&cured[4])[4]
// console.log(curediduky);

// q11 total number of death cases
// death=coivd_data.map((dth)=>dth[3]).reduce((death1,death2)=>death1+death2)
// console.log(death);


// q9