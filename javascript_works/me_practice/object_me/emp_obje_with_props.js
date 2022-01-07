// var employee={
//     eid:1000,
//     ename:"Favaz",
//     esalary:25000,
//     designation:"developer",
//     getEmpsalary(){
//         console.log(this.esalary);
//     }
// }
// employee.getEmpsalary()

// var employee={
//     eid:1000,
//     ename:"Favaz",
//     esalary:25000,
//     designation:"developer",
//     getEid(){
//         console.log(this.eid);
//     }
// }
// employee.getEid()

//print emp designation
// var employee={
//     eid:1000,
//     ename:"Favaz",
//     esalary:25000,
//     designation:"developer",
    // getname(){
    //     console.log(this.ename); 
    // }
// 

// console.log(employee.designation);
// console.log(employee["designation"]);
// employee.getname()

// employee.experience=2
// console.log(employee);

//check "gender" is available or not  (use in)
// var employee={
//     eid:1000,
//     ename:"Favaz",
//     esalary:25000,
//     designation:"developer",
//     gender:"male",
// }
// console.log("gender" in employee);

//if experience is not available ,add experience =1,otherwise add1+current experience

var employee={
    eid:1000,
    ename:"Favaz",
    esalary:25000,
    designation:"developer",
    gender:"male",
    
}
// employee.experience=2
// console.log(employee);
if("experience" in employee){
    employee.experience+=2
}else{
    employee.experience=1
}
console.log(employee);





