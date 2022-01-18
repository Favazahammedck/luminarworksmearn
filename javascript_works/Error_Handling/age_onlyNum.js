try{
var age="50"
if(isNaN(age)){
    throw new Error("Invalid age")

}
}
catch(error){
    console.log(error.message);
}
console.log("access granted");
