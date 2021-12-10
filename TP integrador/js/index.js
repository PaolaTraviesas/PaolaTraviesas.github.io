let btnNewCityElement = document.getElementById('btn-new-city');
let btnWeatherElement = document.getElementById('btn-weather');

btnNewCityElement.onclick = function newCity() {

}

btnWeatherElement.onclick = function weather() {
    fetch('api.openweathermap.org/data/2.5/weather?q={nombreciudad}&appid={clave API}&units=metric&lang=es')
}

