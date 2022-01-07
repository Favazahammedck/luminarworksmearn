// find recursive
var variables="A,B,D,E,G,S,B,D,G,"
var empty=[]
for(values of variables){
    if(empty.includes(values)){
        console.log("recursive is:",values);
        break

    }else{
        empty.push(values)
    }
}