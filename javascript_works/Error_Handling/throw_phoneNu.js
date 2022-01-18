try{
var phoneNumber="9961331223"
if(phoneNumber.length!=10){
    throw new Error("Invalid Mobile Number")
}
}
catch(error){
    console.log(error.message);
}
console.log("access granted");
