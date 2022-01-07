//find recursive character
// var pattern="ABAAC"
// var wc={}
// for(char of pattern){
//     if(char in wc){
//         console.log(`first recursive charecter is:`,char);
//         break

//     }else{
//         wc[char]=1
//     }
// }
var pattern="ABAAC"
var wc={}
var op=[]
// pattern.split("").map(char=>char in wc?op.push(char):wc[char]=1)
// console.log(`Recursive:`,op[0]);
Array.from(pattern).map(char=>char in wc?op.push(char):wc[char]=1)
console.log(`Recursive:`,op[0]);

