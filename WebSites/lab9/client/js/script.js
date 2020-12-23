
function getData(){
    return $.ajax({
        method:'GET',
        url:'http://api.openweathermap.org/data/2.5/weather?q=kiev&appid=d2a5c0783c8b61bbdb0cb40fb84388b4'
    });
}

async function getWeather(){
    let weather = {}
    let data = await getData();
    weather.feelsLike = (data.main.feels_like - 273.15).toFixed(2);
    weather.temp = (data.main.temp - 273.15).toFixed(2);
    weather.name = data.name;
    weather.icon = data.weather[0].icon;
    return weather;
}

function setWeatherHTML(){
    let weather = getWeather();

    document.getElementById('').innerText = weather.name;
    document.getElementById('').innerText = weather.feelsLike;
    document.getElementById('').innerText = weather.temp;
    document.getElementById('').src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`


}

