var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},
    {district:"ekm",temparature:31}


]
//district name with highest temperature

var weather_data={}
for(data of dataset){
    let districtName=data.district
    let currentTemperature=data.temparature
    if(districtName in weather_data){
        let oldTemperature=weather_data[districtName]
        if(oldTemperature<currentTemperature){
            weather_data[districtName]=currentTemperature
        }

    }else{
        weather_data[districtName]=currentTemperature
    }
}
console.log(weather_data);