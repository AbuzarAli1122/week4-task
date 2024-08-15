const button= document.getElementById("search-button")
const input= document.getElementById("city-input")
const cityName= document.getElementById("city-name")
const cityTime= document.getElementById("city-time")
const cityTemp= document.getElementById("city-temp")


// calling an api function 
async function getData(cityName) {
   const promise= await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e4256d23055a47a8877151603241108&q=${cityName}&aqi=yes`
    );
    return await promise.json()
}

button.addEventListener("click", async()=>{
    const value= input.value;
     const result= await getData(value);
     cityName.innerText= "Location :"+`${result.location.name},${result.location.region}, ${result.location.country}`;
     cityTime.innerText= "LocalTime : "+result.location.localtime;
     cityTemp.innerText= "Temp : "+result.current.temp_c;

})

