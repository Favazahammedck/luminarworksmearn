// var students={
//     name:"ahaan",
//     age:20,
//     course:"ms",

// }

// // console.log(students.name);
// // console.log("gender" in students);
// // students.Gender="Male"
// students.Total=150
// // console.log(students);
//             //if total >145 add grade:A+ else Grade:A
// if(students.Total>145){
//     students.Grade="A+"
// }else{
//     students.Grade="A"
// }
// console.log(students);
 
//Word count    o/p={hello:2  hai:2}
// var text="hello welcome hai hello hai hello"
// var empty_obj={}//hello:1 hai:1 hello:2 hai:2
// var words=text.split(" ")//["hello","hai","hello","hai"]
// console.log(words);
// for(let word of words){//hello hai hello hai
//     if(word in empty_obj){
//         empty_obj[word]+=1
//     }else{
// empty_obj[word]=1    
// }
// }
// console.log(empty_obj);

//word count
//   o/p={"welcome:2,heyy:3",hello:1}


// var text="welcome heyy hello heyy welcome heyy"
// var word_count={}
// var words=text.split(" ")
// for(let word of words){
//     if(word in word_count){
//         word_count[word]+=1

//     }else{
//         word_count[word]=1
//     }
// }

// console.log(word_count);

// var inputs="favaz navaz navaz ijaz navaz navaz navaz"
// var word_c={}             //o/p={favaz:1  navaz:5  ijaz:1}
// newarray=inputs.split(" ")//["favaz","navaz","navaz","ijaz","navaz","navaz","navaz"]
// console.log(newarray);

// for(let word of newarray){ //favaz navaz navaz ijaz navaz navaz navaz
// if(word in word_c){
//     word_c[word]+=1

// }else{
//     word_c[word]=1
// }
// }
// console.log(word_c);
//Ternary/single line
// var inputs="favaz navaz navaz ijaz navaz navaz navaz"
// var word_c={}
// inputs.split(" ").map(word=>word in word_c?word_c[word]+=1:word_c[word]=1)
// console.log(word_c);

// var values="hai hello hai hello hello hai"
// var blank={}
// values.split(" ").map(words=>words in blank?blank[words]+=1:blank[words]=1)
// console.log(blank);

//Find first recursive character
// var pattern="BDABBC"
// var blank={}//{B:1 D:1 A:1 B}
// for(char of pattern){//B D A B
//     if(char in blank){
//         console.log(`First Recursive is:`,char);
//         break

//     }else{
//         blank[char]=1

//     }
// }


// var values="FAVAZAHAMMED"
// var rec={}//F:1 A:1 V:1 A is first reccursive
// for(charecter of values){//F A V A
//     if(charecter in rec){
//         console.log(`First Recursive:`,charecter);
//         break

//     }else{
//         rec[charecter]=1
//     }
// }

// var value="FAVAZAHAMMED"
// var word_count={}
// var newarray=[]
// Array.from(value).map(charecter=>charecter in word_count?newarray.push(charecter):word_count[charecter]=1)
// console.log(newarray[0]);