function fetchWeather(){
    let cityName=place.value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric
    `).then(res=>{
        if(res.ok){
            return res.json()

        }else{
            throw new Error("Failed to fetch data from resource")
        }
    }).then(data=>displayValues(data)).catch(err=>alert(err))
}

function displayValues(data){
    // console.log(data.wind.speed);
    let temperature=data.main.temp
    let locationName=data.name
    let minTemp=data.main.temp_max
    let maxTemp=data.main.temp_min
    let typeWeather=data.weather[0].main
    let windSpeed=data.wind.speed

    html_data=`<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Temperature:${temperature}</li>
      <li class="list-group-item">LocationName:${locationName}</li>
      <li class="list-group-item">Minimum Temperature:${minTemp}</li>
      <li class="list-group-item">Maximum Temperatur:${maxTemp}</li>
     <li class="list-group-item">TypeWeathe:${typeWeather}</li>
      <li class="list-group-item">WindSpeed:${windSpeed}</li>

    </ul>
  </div>`

    document.querySelector("#result").innerHTML=html_data

}