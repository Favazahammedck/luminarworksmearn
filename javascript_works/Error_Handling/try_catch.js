 try{
 var expr="%2+5*5+7-2"
console.log(eval(expr));
}
catch(error){
    // console.log(error.message);
    // console.log("error occured");

try{
    var expr="%2+5*5+2"
    console.log(eval(expr));
}
catch(error){
    var expr="%2+5*5+2"
    console.log(eval(expr));

}

}

finally{
console.log("database commit");
console.log("file transfer");
console.log("process end");
}

// try=>doubtfull code
// catch=>handling code
// throw =>custom error
// finally=>Clean up process