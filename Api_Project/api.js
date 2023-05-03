const apiKey = '21452fc695c401b2dbf1b432203486a7';

function searchCity() {
    let input = document.getElementById('searchbutton').value;
    input = input.toLowerCase();


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => { 
    let cityList =document.getElementById('cityList');

    cityList.innerHTML = '';

    let city = document.createElement('li');
    city.innerHTML = `${data.name}: ${data.main.temp}&deg;C`;
    cityList.appendChild(city);
})
.catch(error => console.error(error));
}