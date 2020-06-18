var date = new Date()
var daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var day = date.getDay()
var today = daysInWeek[day]
var hours = date.getHours()
var minutes = date.getMinutes()
document.getElementById("dateAndTime").innerText = (today + " " + hours + ":" + minutes);
function getWeatherIncity(cityName) {
    var request = new XMLHttpRequest();
    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0a63fddbc94423f968b132ba3ce70a1a`)
    request.onload = function () {
        var data = JSON.parse(this.response)
        var temperatureInKelvin = data.main.temp;
        document.getElementById("Longitude").innerHTML = "Longitude :" + data.coord.lon;
        document.getElementById("Latitude").innerHTML = "Latitude  :" + data.coord.lat;
        document.getElementById("precipitation").innerHTML = "precipitation  :" + data.weather[0].description;
        if (request.status >= 200 && request.status < 400) {
            if (typeof (temperatureInKelvin) == "number") {
                document.getElementById("temp").innerHTML = temperatureInKelvin - 273.15;
            }
            else {
                document.getElementById("temp").innerHTML = "error fetching data";
            }
        } else {
            document.getElementById("temp").innerHTML = "error fetching data";
        }
    };
    request.send();
}
function getWeather() {
    var inputCityName = document.getElementById("myTextArea").value;
    document.getElementById("city").innerHTML = inputCityName;

    getWeatherIncity(inputCityName);

}
function getCelcius() {
    var inputCityName = document.getElementById("myTextArea").value;
    cityName = inputCityName;
    var request = new XMLHttpRequest();
    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0a63fddbc94423f968b132ba3ce70a1a`)
    request.onload = function () {
        var data = JSON.parse(this.response)
        var temperatureInKelvin = data.main.temp;
        document.getElementById("cel").innerHTML = temperatureInKelvin - 273.15;
    };
    request.send();
}

function getFahrenheit() {
    var inputCityName = document.getElementById("myTextArea").value;
    cityName = inputCityName;
    var request = new XMLHttpRequest();
    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0a63fddbc94423f968b132ba3ce70a1a`)
    request.onload = function () {
        var data = JSON.parse(this.response)
        var temperatureInKelvin = data.main.temp;
        document.getElementById("fah").innerHTML = temperatureInKelvin;
    };
    request.send();
}