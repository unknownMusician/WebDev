
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

async function setWeatherHTML(){
    let weather = await getWeather();

    if (document.getElementById('w-city') !== null) {
        document.getElementById('w-city').innerText = weather.name;
        document.getElementById('w-feels').innerText = "Feels: " + weather.feelsLike + "°C";
        document.getElementById('w-temp').innerText = "Temp: " + weather.temp + "°C";
        document.getElementById('w-icon').src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
    }
}

// Search by name

if(document.getElementById("search") !== null) {
    document.getElementById("search").oninput = function () {
        let val = this.value.trim().toLowerCase()
        let elasticItems = document.querySelectorAll(".event__title");
        console.log(elasticItems)
        if (val !== '') {
            elasticItems.forEach((elem) => {
                if (elem.innerText.toLowerCase().search(val) === -1) {
                    elem.parentElement.classList.add('hide')
                } else {
                    elem.parentElement.classList.remove('hide')
                }

            })
        } else {
            elasticItems.forEach((elem) => {
                elem.parentElement.classList.remove('hide')
            })
        }
    }
}

document.querySelectorAll(".editBtn").forEach((element) => {element.addEventListener('click',()=> {

    console.log("edit")
    element.classList.add('hide')
    element.previousElementSibling.classList.remove('hide')
    let descText = element.parentElement.parentElement.previousElementSibling
    



})})

document.querySelectorAll('.closeBtn').forEach((element)=>{
    element.addEventListener('click',()=>{

        element.parentElement.classList.add('hide')
        element.parentElement.nextElementSibling.classList.remove('hide')

    })
})

setWeatherHTML()

