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
             //map()
// var mobile_names=mobiles.map(mob=>mob[2])
// console.log(mobile_names);

// var mobile_price=mobiles.map(mob=>mob[3])
// console.log(mobile_price);
                //filter()
                //even number
// var array=[2,4,5,6,3,7,9,10]   
// var evennum=array.filter(number=>number%2==0)
// console.log(evennum);

//name start with "a"

// var names=["arif","favaz","akil","joel","abi"]
// var names_a=names.filter(name1=>name1[0]=="a")||(name1[0]=="A")
// console.log(names_a);

//                  print samsung company phones details
// var find_samsung=mobiles.filter(company=>company[1]=="samsung").map(company=>company[2])
// console.log(find_samsung);

                    //print all moblies under 25000

// var belowrate=mobiles.filter(price=>price[3]<=25000).map(price=>[price[1],price[2]])
// console.log(belowrate);

            //   print mobile details in price range of 25k-30k
// var price_between=mobiles.filter(price=>price[3]>=25000&&price[3]<=30000)//.map(price=>price[1])
// console.log(price_between);  

                    //          TASKS:-

//              list all 5g mobiles names
// var fgmob=mobiles.filter(band=>band[6]=="5G").map(band=>band[2])
// console.log(fgmob);



//             list all 5g mobiles available under 25000
// var fgbelow=mobiles.filter(mob=>mob[3]<25000&&mob[6]=="5G").map(mob=>mob[2])
// console.log(fgbelow);

// list all samsung mobile names whose band=4g and display type AMOLED
var mobBandandAMOLEDandfourG=mobiles.filter(mob=>mob[1]=="samsung"&&mob[5]=="AMOLED"&&mob[6]=="4g")
console.log(mobBandandAMOLEDandfourG);




                