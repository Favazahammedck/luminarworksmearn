var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",26000,"developer",2000,2010],
    [1003,"nikil",37000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",12000,"ba",2001,2010],
]
// //print employee all names
// for(employ of employees){
//     console.log(employ[1]);
// }

//print deveolopers details
// for(let employ of employees){

//     if(employ[3]=="developer"){
//         console.log(employ);
//     }
// }

//print experience of each employees
// var experience=0
// for(employ of employees){
//     console.log(employ[5]-employ[4]);
// }

//print employees details who is having experience>10

// for(let employ of employees){
//     if(employ[5]-employ[4]>10){
//         console.log(employ);
//     }
// }

//print highest salary
// var highsalary=0
// for(let employ of employees){
//     if(employ[2]>highsalary){
//         highsalary=employ[2]
//     }
// }
// console.log(highsalary);




                    //           TASKS
              //                Q1
//print highest second salary
// employees.sort((e1,e2)=>e2[2]-e1[2])
//    console.log(employees[1][2]);
   //                  [1]=second location [2]salary  
    
                    //              Q2
// //print minimum salary
// minimum_sal=45000
// for(employ of employees){
//     if(employ[2]<minimum_sal){//15000<0            25000<15000 26000<15000 37000<15000 35000<15000 40000<15000 12000<15000 
//         minimum_sal=employ[2] //minimum sal=15000     15000      15000       15000        15000       15000       12000

//     }
// }

// another method
// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[employees.length-1][2]);

// console.log(minimum_sal);
   
                         //                     Q3
//number of employees
// for(employ of employees){
// }
// console.log(employees.length);


                          //                      Q4
//highest salary amoung devolopers
// var max_salary=0
// for(employ of employees){
//     if(employ[3]=="developer"&&employ[2]>max_salary){
//         max_salary=employ[2]                         
    
// }
// }
//another method
// var developer_details=[]
// for(employ of employees){
//     if(employ[3]=="developer"){
//         developer_details.push(employ)
//     }
// }
// developer_details.sort((n1,n2)=>n2[2]-n1[2])
// console.log(developer_details[0][2]);
// console.log(max_salary);

       //                                     Q5
//print details of employees whose name start with a
// for(employ of employees){
//     if(employ[1][0]=="A"||employ[1][0]=="a"){
//         console.log(employ);
//     }
// }

            //                          Q6
//print  details of employee who were working in the period of 2010 to 2015

for(let employ of employees){
    if(employ[4]>=2010&&employ[5]<=2015){
        console.log(employ);
    }
}








  







