var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]

                        //costly mobile details
// mobiles.sort((n1,n2)=>n2[3]-n1[3])
// console.log(mobiles[0]);

                     //snapdragon processor mobile 
//  for(let mob of mobiles){
//      if(mob[4]=="snapdragon"){
//          console.log(mob);
//      }
//  }

//            print costly mobile with processor snapdragon with 5g       
// var newarray=[]
// for(mob of mobiles){
//     if(mob[4]=="snapdragon"&&mob[6]=="5G"){
//         newarray.push(mob)
//     }
// }
// newarray.sort((n1,n2)=>n2[3]-n1[3])
// console.log(newarray[0]);

var costly_snapdragon=mobiles.filter(mob=>mob[4]=="snapdragon"&&mob[6]=="5G").sort((n1,n2)=>n2[3]-n1[3])[0]
console.log(costly_snapdragon);


          //is there any mobile can i purchase below 10k?

// for(let mob of mobiles){
//     if(mob[3]<10000){
//         console.log(mob)
//     }else{
//         console.log(`There is no mobile price range below 10000`);
//         break
//     }
// }

           // print samsung a51 mobile details

// for(mob of mobiles){
//     if(mob[2]=="samsung A51"){
//         console.log(mob);
//     }
// }

//35line  
// => fun