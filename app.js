
var date=new Date()
var daysInWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var day=date.getDay()
var today=daysInWeek[day]
var hours=date.getHours()
var minutes=date.getMinutes()
document.getElementById("dateAndTime").innerText=(today+" "+hours+":"+minutes);
var weatherInCities=[
    {city:"Hyderabad,Telangana",climateCondition:"sunny",precipitation:"20%",temperature:45,Latitude:"17.3850'N",Longitude:"78.4867'E"},
    {city:"Bhopal,MadhyaPradesh",climateCondition:"sunny",precipitation:"23%",temperature:40,Latitude:"23.2599'N",Longitude:"77.4126'E"},
    {city:"Imphal,Manipur",climateCondition:"cloudy",precipitation:"90%",temperature:15,Latitude:"24.8170'N",Longitude:"93.9368'E"},
    {city:"Agarthala,Tripura",climateCondition:"Rainy",precipitation:"92%",temperature:22,Latitude:"23.8315'N",Longitude:"91.2868'E"},
    {city:"Kohima,Nagaland",climateCondition:"Humid",precipitation:"100%",temperature:21,Latitude:"25.6751'N",Longitude:"94.1086'E"},
    {city:"Chennai,TamilNadu",climateCondition:"Sunny",precipitation:"10%",temperature:42,Latitude:"13.0827'N",Longitude:"80.2707'E"},
    {city:"Bengalore,Karnataka",climateCondition:"Humid",precipitation:"64%",temperature:38,Latitude:"12.9716'N",Longitude:"77.5946'E"},
    {city:"Mumbai,Maharashtra",climateCondition:"cloudy",precipitation:"78%",temperature:29,Latitude:"19.0760'N",Longitude:"72.8777'E"}
]
function getWeather(){
    var list=document.getElementById("list")
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
    })
    document.getElementById("climate").innerText=weatherInSelectedCity.climateCondition;
    document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
    document.getElementById("city").innerText=selectedCityFromList;
    document.getElementById("Latitude").innerText=weatherInSelectedCity.Latitude;
    document.getElementById("Longitude").innerText=weatherInSelectedCity.Longitude;
    document.getElementById("precipitation").innerText=weatherInSelectedCity.precipitation;
}
function getFahrenheit(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
[20:51, 16/06/2020] Anjali Mom: document.getElementById("temp").innerText=(weatherInSelectedCity.temperature*9/5)+32;
}
function getCelsius(){
    var list=document.getElementById("list");
    var selectedCityFromList=list.options[list.selectedIndex].value;
    var weatherInSelectedCity=weatherInCities.find(e=>{
        return e.city==selectedCityFromList
})
document.getElementById("temp").innerText=weatherInSelectedCity.temperature;
}
function getWeatherIncity(cityName)
{
    var request=new XMLHttpRequest();
    request.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0a63fddbc94423f968b132ba3ce70a1a`)
request.onload=function()
{
    var data=JSON.parse(this.response)
    var temperatureInKelvin=data.main.temp
    if(request.status>=200&&request.status<400){
        if(typeof(temperatureInKelvin)=="number"){
            document.getElementById("temp").innerHTML=temperatureInKelvin-273.15;
        }
        else
        {
            document.getElementById("temp").innerHTML="error fetching data";
        }
    }else {
        document.getElementById("temp").innerHTML="error fetching data";
    } 
};
request.send();
}    
function getWeather()
{
    var inputCityName=document.getElementById("myTextArea").value;
    getWeatherIncity(inputCityName)
}
