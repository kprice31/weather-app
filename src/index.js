let currentTime = new Date();
function formalDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  let months = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[currentTime.getMonth()];
  let currentDate = currentTime.getDate();
  let newDate = `${day}, ${month} ${currentDate}`;

  return newDate;
}
let actualDate = document.querySelector("#date");
actualDate.innerHTML = formalDate();

function formalTime() {
  let hour = currentTime.getHours() % 12 || 12;
  let minute = currentTime.getMinutes();
  let newTime = `${hour}:${minute}`;
  return newTime;
}
let actualTime = document.querySelector("#time");
actualTime.innerHTML = formalTime();

// editing the search engine to input value into the location id
function city(event) {
  event.preventDefault();
  let location = document.querySelector("#city");
  let currentCity = document.querySelector("#city-input");
  location.innerHTML = currentCity.value;
}
let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", city);

//fahrenheit to celcius conversion

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}

let celsiusLink = document.querySelector("#celsiusLink");
celsiusLink.addEventListener("click", convertToCelsius);

let fahrenheitLink = document.querySelector("#fahrenheitLink");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

// api

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let h1 = document.querySelector("#temp");
  h1.innerHTML = temperature;
}

function positionCallBack(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "95978b2d1c80a8082e1ff71cffffb85f";
  let apiEndPoint = "http://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(positionCallBack);

let cityName = document.querySelector("#city-input");
let apiKey = "95978b2d1c80a8082e1ff71cffffb85f";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
console.log(apiUrl);
