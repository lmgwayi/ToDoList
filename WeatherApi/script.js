const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const details = document.querySelector('.weatherDetails')

search.addEventListener('click', () => {

    const APIKey = '21452fc695c401b2dbf1b432203486a7';
    // const city = document.querySelector('.search-box input').value;
    let cityInput = document.getElementById("city-input").value;
    document.getElementById("city-input").value = ""
    details.style.display = 'none';

    
    if (cityInput === '') {
        alert("Please enter a city name ");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            console.log(json)
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');
            const d = new Date();
            const outfitSuggestion = document.querySelector('.weather-box .outfit');
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const CityName = document.querySelector('.weather-box .cityName');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'download-removebg-preview.png';
                    break;

                case 'Rain':
                    image.src = 'Rainng.png';
                    break;

                case 'Snow':
                    image.src = 'snow.png';
                    break;

                case 'Clouds':
                    image.src = 'SCD.png';
                    break;

                case 'Haze':
                    image.src = 'overcast.png';
                    break;

                default:
                    image.src = '';
               }
            

 
                let tempResults = `${parseInt(json.main.temp)}`

                 if(tempResults<16){
                    outfitSuggestion.innerHTML =("It's cold, you might want to carry a jacket")
                  }
                 else if(tempResults<=21 && tempResults>=16){
                    outfitSuggestion.innerHTML =("It is warm, you could wear t-shirt and jeans.")
                 }
                 else if(tempResults>21)
                 outfitSuggestion.innerHTML =("It's a hot day, you can rock your shorts.")


            document.getElementById("currentTime").innerHTML = d;
            CityName.innerHTML = `${json.name}`; 
           
            humidity.innerHTML = `${json.main.humidity}%`
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        });


});