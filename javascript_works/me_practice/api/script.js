function fetchData(){
    countryName=country_name.value
    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).then(res=>res.json()).then(data=>displayValue(data))

}
function displayValue(country){
    console.log(country[0].population);
    let countryName=country[0].name
    let First_language=country[0].languages[0].name
    // let Second_language=country[0].languages[1].name
    let currencyName=country[0].currencies[0].name
    let currenctySymbol=country[0].currencies[0].symbol
    let capital=country[0].capital
    let flag=country[0].flag
    let popu=country[0].population

    let html_data=`<div class="card" style="width: 18rem;">
    <img src="${flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${countryName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${First_language}</li>
      <li class="list-group-item">${currencyName}</li>
      <li class="list-group-item">${currenctySymbol}</li>
      <li class="list-group-item">${capital}</li>
      <li class="list-group-item">${popu}</li>
    </ul>
    </div>
  </div>`
  document.querySelector("#RESULT").innerHTML=html_data
}