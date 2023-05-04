const form = document.getElementById("weather-form");
const locationInput = document.getElementById("location");
const locationName = document.getElementById("location-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const location = locationInput.value;
  getWeatherData(location)
    .then(function(data) {
      locationName.textContent = data.name;
      temperature.textContent = data.main.temp + "°C";
      description.textContent = data.weather[0].description;
      saveWeatherData(data);
    })
    .catch(function(error) {
      console.error(error);
    });
});

function getWeatherData(location) {
  const apiKey = "YOUR_API_KEY";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  return fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

function saveWeatherData(data) {
  const weatherData = {
    location: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description
  };
  localStorage.setItem("weatherData", JSON.stringify(weatherData));
}