var text="hello hai hello hai"
var wc={}
// var words=text.split(" ")
// for(word of words){
//     if(word in wc){
//         wc[word]+=1

//     }else{
//         wc[word]=1
        
//     }
// }
// console.log(wc);

            //ternary

text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1)
console.log(wc);






