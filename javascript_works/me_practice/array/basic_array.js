// // var employee_name=["favaz","arif","ajith","rafeeque","aswin"]
// // // for(let i=0;i<=employee_name.length;i++){
// // //     console.log(employee_name[i]);
// // // }
// // for(let name of employee_name){
// //     console.log(name);
// // }
// //  var expenses=[20000,25000,30000,35000,35000]
// //  for(let i=0;i<=expenses.length;i++){
// //      console.log(expenses[i]);
// //  }

// // for(let amount of expenses){
// //     console.log(amount);
// // }

//                             //print all expenses >25000
// // var expenses=[20000,25000,30000,35000,35000]
// // for(let amount of expenses){
// //     if(amount>25000){       // 20000>25000 fls 25000>25000 fls 30000>25000  35000>25000 35000>25000
// //         console.log(amount);                              //     30000        35000       35000
// //     }
// // }

//                                 //find total expenses
// // var expenses=[20000,25000,30000,35000,35000]
// // var sum=0
// // for(let amount of expenses){
// //     sum+=amount       //sum=0 0+20000 sum=20000 20000+25000 sum=45000 45000+30000  sum=75000 75000+35000  sum=11000 110000+35000  hydration ended (print sum)
// // }
// // console.log(sum);    //sum=    20000          45000                     75000              110000                145000       
           
//                             //find_maximum expense
// var expenses=[20000,25000,30000,35000,35000]
// var max_exp=0
// for(let amount of expenses){
//    if(amount>max_exp){//20000>0  25000>20000  30000>25000 35000>30000   350000>30000  array hydration end  
//       max_exp=amount//20000        25000       30000         35000      max_exp=35000
//    }
// }
// console.log(max_exp);
//                              find minumum expense

// var expenses=[20000,25000,30000,15000,10000,5000]
// min_expense=expenses[0]
// for(let amount of expenses){
//    if(amount<min_expense){
//       min_expense=amount
//    }

// }
// console.log(min_expense);

                // push(add new array element to the last of the array)
// var expenses=[20000,25000,30000,15000,10000,5000]
// expenses.push(65000)
// console.log(expenses);

// var expenses=[20000,20000,25000,10000,10000,5000]
                //          remove duplicate from array using Set
// var rem_dup=new Set()
//     for(let amount of expenses){
//         rem_dup.add(amount)

//     }
//     console.log(rem_dup)

// var emp_salary=["1000","1000","2000","2000","3000"]
// let salary
// var rem_dup_salary=new Set();
// for(let salary of emp_salary){
//     rem_dup_salary.add(salary)
// }
// console.log(rem_dup_salary);
 
//                                 //pop-remove last element from array
// var emp_salary=["1000","1000","2000","2000","3000"]
// for(salary of emp_salary){
//  emp_salary.pop()
// }
// console.log(emp_salary);
    

       // includes (check the given argument is availabel in the array or not)result:true/false

// var emp_salary=[1000,1000,2000,2000,3000]
// for(amount of emp_salary){
// }
// // console.log(emp_salary.includes(5000));
// console.log(emp_salary.includes(2000));
          // includes (check duplicates ,no duplicates push to new array)
var person_age=[29,23,23,45,54,45,77,77]
var blank_arr=[]
for(let age of person_age){
    if(blank_arr.includes(age)){

    }else{
        blank_arr.push(age)
    }
}
console.log(blank_arr);