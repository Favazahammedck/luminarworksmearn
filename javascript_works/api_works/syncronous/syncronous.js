// normal line... goto call stack and wipe out & settimout go to webapi and first low time object  move to callback que

console.log("line 1");
console.log("line 1.5");
setTimeout(()=>{
    console.log("line 2");

},5000)
console.log("line 3");
console.log("line 4");
setTimeout(()=>{
    console.log("line5");
},2000)

console.log("line6");
console.log("line7");
setTimeout(()=>{
    console.log("line8");

},0)



// line=1 
// line =1.5
// line3=3
// line=4
// line=6
// line=7
// line=8
// line=5
// line=2

