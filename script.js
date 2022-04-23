const API_KEY = 'Enter Your Api Key => https://openweathermap.org/api ';


var DateNow = new Date();

var months = DateNow.getMonth();
var days = DateNow.getDate();
var year = DateNow.getFullYear();

document.getElementById('App__Date').textContent = days + ' / ' + months + ' / ' + year;


function wetherApp() {
   
   async function positionFunction() {

      var CityName = document.getElementById('country').value;
      var limit = 1;
      const request2 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${CityName}&limit=${limit}&appid=${API_KEY}`);
      const response2 = await request2.json();

      var lat = response2[0].lat;
      var lon = response2[0].lon;

      async function wetherFunction() {
         const request1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
         const response1 = await request1.json();
         console.log(response1)
         document.getElementById('countryName').innerHTML = CityName + ', ' + response1.sys.country;
         document.getElementById('wetherType').innerHTML = response1.weather[0].description;
         document.getElementById('wind').innerHTML = response1.wind.speed + ' km/h';
         document.getElementById('temperature').innerHTML = response1.main.temp + ' °C';
         document.getElementById('humidity').innerHTML = response1.main.humidity + ' %';
         
      }
      wetherFunction();
   }
   positionFunction()
}



